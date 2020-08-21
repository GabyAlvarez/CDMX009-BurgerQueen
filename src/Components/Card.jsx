import React from 'react';

const Card = ({addProduct,productos,producto,pedido}) => {
    
    //agregar producto al carrito
    const selectProduct = id => {
        let producto = productos.filter(producto => producto.id === id)[0];
        let contieneProduct = pedido.filter(producto => producto.id === id);

        if(contieneProduct.length > 0) {
            for(let index=0; index < pedido.length; index++ ){
                if (pedido[index].id === id) {
                    pedido[index].quantity ++
                    addProduct([...pedido])
                }
            }
        } else {
            producto.quantity = 1
            addProduct([...pedido,producto])
        }
    }

    return ( 
        <div className="cardMenu" onClick={() => selectProduct(producto.id)}>
            <img src={producto.img} alt="" className={"imgCard"}/>
            <p className="textCard">{producto.name}</p>
            <p className="textCard">${producto.price}</p>
        </div>
     );
}
 
export default Card;
