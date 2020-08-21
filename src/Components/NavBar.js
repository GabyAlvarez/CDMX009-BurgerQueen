import React from 'react';
import { Link } from 'react-router-dom'
import menu from '../data/menu'
import { useFirebaseApp } from 'reactfire';
import { useHistory } from "react-router-dom";

const NavBar = ({setisLoggin}) => {
    const firebase= useFirebaseApp();
    const history = useHistory();

    const logout = async () => {
        await firebase.auth().signOut();
        history.push("/login");
    }

    return ( 
        <div className="container-nav">
            { JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).rol === "Mesero" &&
            <Link to={{ pathname: "Products", state: {detail: menu.burgers, setisLoggin:setisLoggin} }}>
                <button className="btn-menu">Menu</button>
            </Link>
            }
            { JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).rol === "Cocinero" &&
                <Link to="/Kitchen">
                    <button className="btn-menu">Cocina</button>
                </Link>
            }
            
            <button onClick = { e =>logout(e)} className="btn-menu">Logout</button>
        </div>
        
     );
}
 
export default NavBar;