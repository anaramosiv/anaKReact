import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'


const Cart = () => {

  const context = useCartContext();
  const {cart, removeProduct, wipeCart,} = useCartContext();
  console.log("Componente cart",cart);

  return (
    <div className='areaCard'> 
    <h2>Carrito de compras</h2>
       {cart.map((item) =>{
          return (
            <div key={item.id}>
            <p>{item.name}</p>
            <p> Cantidad:  {item.quantity}</p>

            <button onClick={()=> removeProduct(item.id)}>Eliminar item</button>
            </div>
          )})}

          <button onClick={()=> wipeCart()}>Vaciar Carrito</button>
      
    </div>

  )
}

export default Cart