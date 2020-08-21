import React, {useState}from 'react'
import iconDelete from '../assets/image/delete.png'
import '../styles/login.css'

import {useFirebaseApp} from 'reactfire';

const Order = ({pedido,productos,addProduct}) => {
   
    const firebase= useFirebaseApp();
    const db = firebase.firestore();

    const[formData, setFormData] = useState({
        "name": "",
        "table": "",
        "order": {}
    })

    const[formValid, setFormValid] = useState(false)

    let {name,table} = formData
    
    function getOrdenes() {
        let ordenes = JSON.parse(localStorage.getItem("ordenes"))
        return ordenes !== undefined && ordenes !== null ?  ordenes : [];
    }

    const actualizarValoresForm = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    //delete producto al carrito
    const selectProduct = id => {

        for(let index=0; index < pedido.length; index++ ) {
            if (pedido[index].id === id) {
                if(pedido[index].quantity === 1) {
                    pedido.splice(index,1)
                    addProduct([...pedido])
                } else {
                    pedido[index].quantity --
                    addProduct([...pedido])
                }
            }
        }
    }
    
    const addOrders = () => {
        //Hacer validaciones
        if(name.trim() === "" || table.trim() ==="" || pedido.length === 0) {
            setFormValid(true)
            return;
        } else {
            setFormValid(false)
        }

        let ordenActual = {
            "name": name,
            "table": table,
            "order": pedido
        }

        let ordenes = getOrdenes();

        //Buscar si ya se tiene una orden para la mesa y si sí se elimina
        for(var i=0; i<ordenes.length; i++) {
            if(ordenes[i].table === ordenActual.table) {
                ordenes.splice(i,1)
            }
        }
        
        ordenes.push(ordenActual)
        localStorage.setItem("ordenes", JSON.stringify(ordenes))

        //Limpiar valores del formulario
        setFormData({
            "name": "",
            "table": ""
        })

        //Almacenar en la BDD
        db.collection("Orders").add({
            nombre: name,
            mesa: table,
            productos: pedido,
            status: "iniciada"
        });
        
        addProduct([])
    }

    return (
        <div className="customerOrder">
            {
                formValid &&
                <div style= {{ color:'red', textAlign:'center'}}>Error En los datos ingresados </div>

            }
            <div className="headerOrder">
                <input
                value={name} 
                onChange={actualizarValoresForm} 
                name="name" 
                type="text" 
                placeholder="Nombre cliente"/>
                <input value={table} onChange={actualizarValoresForm} name="table" type="text" placeholder="No mesa"/>
            </div>
            <table>
            <caption>Ticket para cocina</caption>
                <thead>
                    <tr>   
                    <th><p>Cant.</p></th>
                    <th><p>Producto</p></th>
                    <th><p>Precio</p></th>
                    </tr> 
                </thead>  
                {pedido.map(item => (
                <tbody key={item.id}>
                    <tr>   
                    <td><p>{item.quantity}</p></td>
                    <td><p>{item.name}</p></td>
                    <td><p>${item.price * item.quantity}</p></td>
                    <td><img onClick={() => selectProduct(item.id)} src={iconDelete} className="iconDelete" alt="iconDelete"/></td>
                    </tr> 
                 </tbody>
                ))}
                <tfoot>
                    <tr className="totalPrice">
                        <td>Total</td>
                        <td>
                        ${" "}
                        {pedido.reduce((prevValue, currentValue) => {
                        return prevValue + currentValue.price * currentValue.quantity;
                        }, 0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="btnOrder">
                <button className="btnSendOrder" onClick={() => addOrders()}>Enviar</button>
            </div>
        </div> 

     );
     
}
 
export default Order;