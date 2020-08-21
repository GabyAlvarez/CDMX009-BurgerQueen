import React from 'react';

const Cookmodule = () => {
    const ordenes = getOrdenes()
    
    function getOrdenes() {
        let ordenes = JSON.parse(localStorage.getItem("ordenes"))
        // setOrdenes(ordenes != undefined && ordenes != null ?  ordenes : [])
        return ordenes !== undefined && ordenes !== null ?  ordenes : []
    }

    // localStorage.setItem("ordenes", JSON.stringify(ordenes))

    return ( 
        <div className="containerCook">
            
            {ordenes.map(item => (
                <div className="cardOrder" key={item.table}>
                    <p><b>Cliente:</b>{item.name} </p>
                    <p><b>Mesa:</b>{item.table}</p>
                    {/* {
                        item.order.map((detalleOrder,index) => (
                            <p key={index}> {detalleOrder.quantity} {detalleOrder.name}</p>

                        ))
                    }  */}
           
            <table>
            <caption>Ticket cocina</caption>
                <thead>
                    <tr>   
                    <th><p>Cant.</p></th>
                    <th><p>Producto</p></th>
                    </tr> 
                </thead>
                {
                    item.order.map((detalleOrder,index) => (
                <tbody key={index}>
                    <tr>
                        <td><p>{detalleOrder.quantity}</p></td>
                        <td><p>{detalleOrder.name}</p></td>
                    </tr>
                </tbody>
                    ))}
            </table>
            </div>
            ))}
        </div>
     );
}
 
export default Cookmodule;