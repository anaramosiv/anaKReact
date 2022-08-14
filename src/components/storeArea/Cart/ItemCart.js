import React from 'react'

import { useCartContext } from '../../../context/CartContext/CartContext';


const ItemCart = ({item}) => {
  const {removeProduct} = useCartContext();

  return (
    <>
    
        <div className='cartItems'>
            <p>{item.name}</p>
            <p> {item.quantity}</p>
            <p> €: {item.quantity * item.priceMax}</p>
            <button onClick={()=> removeProduct(item.id)}>Eliminar</button>
         
        </div>

    
</>
  )
}

export default ItemCart