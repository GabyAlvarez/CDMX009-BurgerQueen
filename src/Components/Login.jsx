import React, { useState } from 'react';
import logoImage from '../assets/image/logoBurgerixtli.png';
import Products from './Products';
import menu from '../data/menu'
import {useFirebaseApp, useUser} from 'reactfire';
import Cookmodule from '../Components/Kitchen/Cookmodule';

const Login = ({setisLoggin}) => {
    
    const firebase = useFirebaseApp();
    const db = firebase.firestore();
    const user = useUser();

    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');
    const[ rol, setRol] = useState('Mesero');

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

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(exitoLogin(email), () => {
                console.log("Hubo un error al consultar en BDD")
            });
    }

    const exitoLogin = (email) => {
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
    }
    
    // Observador de estado
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setisLoggin(true)
        } else {
            setisLoggin(false)
            localStorage.setItem("user", null)
        }
        
    });

    return ( 
        <div className="login-container">
            {
            !user &&
            <div className="login-input">
                <div className="logo-circle">
                    <img src={logoImage} className="App-logo" alt="logo" />
                </div> 
                
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                
                <select onChange = { e => setRol(e.target.value)}
                        value={rol}>
                    <option value="Mesero">Mesero</option> 
                    <option value="Cocinero">Cocinero</option>
                </select>

                <button onClick={createAcount}>Create account</button>
                <button onClick={login}>Login</button>
            </div>
            }
            {
            
            user && JSON.parse(localStorage.getItem("user")) && 
                JSON.parse(localStorage.getItem("user")).rol === "Mesero" &&
                <div> 
                  <Products 
                  setisLoggin={setisLoggin}
                  detail= {menu.burgers} />
                </div>
            }
            
            {
                user && JSON.parse(localStorage.getItem("user")) && 
                JSON.parse(localStorage.getItem("user")).rol === "Cocinero" &&
                <Cookmodule />
            }
        </div>
     );
}
 
export default Login;