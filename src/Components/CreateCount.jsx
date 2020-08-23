import React, { useState } from 'react'
import logo from '../assets/image/logo.png';
import {useFirebaseApp} from 'reactfire';
import '../styles/newUser.component.css'

const CreateCount = ({setHaveAcount}) => {

    const firebase = useFirebaseApp();
    const db = firebase.firestore();

    const [name, setName] = useState('');
    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');
    const[ rol, setRol] = useState('Mesero');

    const validateFields = () => {

        if(!name || !email || !password || !rol){
            console.log("Favor de verificar los compos");
        }else{
            createAcount()
        }

    }

    const createAcount = async () => {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, password).then(exitoCallback, () => {
                    console.log("Ya existe una cuenta con este E-mail")
                });
    }

    const exitoCallback = () => {
        // Guarda en la BDD
        db.collection("Users").add({
            usuario: email,
            rol: rol
        }).then(() => {
              // Guardamos el usuario en LocalStorage
                db.collection("Users").where("usuario", "==", email)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        let user = doc.data();
                        user['id'] = doc.id;
                        localStorage.setItem("user", JSON.stringify(user))
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
            });
        });
    }

    return (
        <div className="login-container">
            <div className="login-input">
                <div className="logo-circle">
                    <img src={logo} className="logo" alt="logo" />
                </div> 
                <input type="text" id="name" placeholder="Nombre" onChange={(ev) => setName(ev.target.value) } />
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" onChange={ (ev) => setPassword(ev.target.value) }/>

                <select 
                    onChange = { e => setRol(e.target.value)}
                    value={rol}>
                    <option value="Mesero">Mesero</option> 
                    <option value="Cocinero">Cocinero</option>
                </select>

                <button className="btn-newUser" onClick={validateFields}>Create Account</button>
                <button className="btn-newUser" onClick= {() => setHaveAcount(true) } > Regresar</button>
            </div>
        </div>
    )
}

export default CreateCount
