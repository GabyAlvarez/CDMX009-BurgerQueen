import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth';
import menu from '../data/menu'
import '../styles/login.css'

const MenuProducts = (props) => {

    return ( 
        <Fragment>
            <nav className="main-nav">
                    <Link to={{ pathname: "Products", state: {detail: menu.burgers} }}>
                        <button className="btn-menu">Hamburguesas</button>
                    </Link>
                    <Link to={{ pathname: "Products",  state: {detail: menu.breakfast}}}>
                        <button className="btn-menu">Desayunos</button>
                    </Link>
                    <Link to={{ pathname: "Products", state: {detail: menu.drinks}}}>
                        <button className="btn-menu">Bebidas</button>
                    </Link>
                    <Link to={{ pathname: "Products", state: {detail: menu.additional}}}>
                        <button className="btn-menu">Complementos</button>
                    </Link>
            </nav>
        </Fragment>
     );
}
 
export default MenuProducts;

