import React, {useState} from 'react';
import Card from './Card'
import Order from './Order'
import MenuProducts from './MenuProducts';
import {useFirebaseApp} from 'reactfire';
import 'firebase/auth';

const Products = (props) => {

    const firebase= useFirebaseApp();
    const productos = props.detail || props.location.state.detail
    const [pedido, addProduct] =useState([]);

    let user = firebase.auth().currentUser;

    if (user && props.setisLoggin) {
        props.setisLoggin(true)
    }

    return ( 
        <div>
            <MenuProducts />
        <div className="containerMenu">
            
        <div className="containerCard">
            {productos.map(item => (
                <Card 
                    key={item.id}
                    producto = {item}
                    addProduct = {addProduct}
                    productos = {productos}
                    pedido = {pedido}
                />
            ))} 
        </div>
        <div className="containerOrder">
            <Order pedido = {pedido}
                   addProduct = {addProduct}
                   productos = {productos}/>
        </div>

        </div>
        
        </div>
    );
}
 
export default Products;