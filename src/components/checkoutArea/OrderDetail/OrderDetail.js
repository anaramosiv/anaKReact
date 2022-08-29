import React from 'react'
import "./orderDetail.css"

const OrderDetail = ({order}) => {


  return (
    <div className='orderDetail'>
      <p>Pedido con id: {order.id}</p>
      <p> A nombre de: {order.buyer.name.name}</p>
      <p> Fecha de pedido {order.buyer.orderDate}</p>
      <h3>Productos adquiridos</h3> 
     {order.items.map((item, index)=>{
       const {quantity, tittle, id, price} = item
       return(
         <div key={id}>
          <h4> ticket {index +1}</h4>
         <p> Id de producto: {id}</p>
         <p>Cantidad: {quantity}</p>
         <p>Evento: {tittle}</p>
         <p>Precio Unitario: {price}</p>
         </div>
       )

     })}
    
    <p>Total {order.total} €</p>
    </div>
  )
}

export default OrderDetail