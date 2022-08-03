import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext'


const ItemCart = ({item}) => {

    const {cart, removeProduct,  wipeCart,} = useCartContext();
  return (


    <div className='areaCart'>

            <p>{item.name}</p>
            <p> Cantidad:  {item.quantity}</p>
            <p>precio unitario € {item.priceMax}</p>
            <p>Subtotal: {item.quantity * item.priceMax}</p>
            <button onClick={()=> removeProduct(item.id)}>Eliminar item</button>
          
    </div>
  )
}

export default ItemCart