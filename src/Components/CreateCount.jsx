import React, { useState } from 'react'
import logoImage from '../assets/image/logoBurgerixtli.png';
import {useFirebaseApp} from 'reactfire';

const CreateCount = () => {

    const firebase = useFirebaseApp();
    const db = firebase.firestore();

    const [name, setName] = useState('');
    const[ email, setEmail] = useState('');
    const[ password, setPassword] = useState('');
    const[ rol, setRol] = useState('Mesero');

    const createAcount = async () => {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, password).then(exitoCallback, () => {
                    console.log("Ya existe una cuenta con este E-mail")
                });
    }

    return (
        <div className="login-container">
            <div className="login-input">
                <div className="logo-circle">
                    <img src={logoImage} className="App-logo" alt="logo" />
                </div> 
                <input type="text" id="name" placeholder="Nombre" onChange={(ev) => setName(ev.target.value) } />
                <input type="email" id="email" placeholder="Email" onChange={(ev) => setEmail(ev.target.value) } />
                <input type="password" id="password" placeholder="Password" onChange={ (ev) => setPassword(ev.target.value) }/>
                
                <select onChange = { e => setRol(e.target.value)}
                        value={rol}>
                    <option value="Mesero">Mesero</option> 
                    <option value="Cocinero">Cocinero</option>
                </select>

                <button onClick={createAcount}>Create account</button>
            </div>
        </div>
    )
}

export default CreateCount