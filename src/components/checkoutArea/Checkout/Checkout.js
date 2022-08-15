import React from 'react'
import FormContainer from '../FormContainer/FormContainer'
import ItemCart from "../../storeArea/Cart/ItemCart"
import './checkout.css'
import { useCartContext } from '../../../context/CartContext/CartContext'





const Checkout = () => {
  const {cart, totalAmount} = useCartContext();





  return (
        
    <section className='checkout'>
      <h3>Finalizar compra</h3>

      <div className='buyContainer'>
        <FormContainer/>
        <div>
        {cart.map(item => <ItemCart key={item.id} item ={item}/>)}
        <p>Monto total: {totalAmount()}</p>
        </div>
     
     
     </div>
        
        

    </section>
  )
}

export default Checkout