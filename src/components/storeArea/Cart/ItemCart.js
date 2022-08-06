import React from 'react'
import ItemPreview from '../Item/ItemPreview';

import { useCartContext } from '../../../context/CartContext/CartContext';

const ItemCart = ({item}) => {
  const {removeProduct} = useCartContext();

  return (
    <>
    
     
         {/* <aside className="cardComplete infoCart">
          <ItemPreview   name= {item.name} id={item.id} date ={item.date} time ={item.time} image= {item.image} priceMin={item.priceMin} priceMax= {item.priceMax}/>
        </aside> */}
     
   
    
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