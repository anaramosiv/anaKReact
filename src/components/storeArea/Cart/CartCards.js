import React from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'
import ItemPreview from '../Item/ItemPreview';


const CartCard = () => {

  const {cart} = useCartContext();

  return(
    <div className='cardBoss'>
        
        
        {
        
        cart.map(prod => 
        {return(
            <div className='cardComplete' key={prod.id}>
            <ItemPreview  
            name ={prod.name} 
            id={prod.id} 
            image= {prod.image}
            priceMax ={prod.priceMax}
            date ={prod.date} 
            time={prod.time} />
            </div>
        )}
        
        )
       }
       

    </div>
  
  )

}
export default CartCard