import React from 'react'
import './checkout.css'
import { useCartContext } from 'context/CartContext/CartContext'
import FormContainer from 'components/views/FormContainer'
import ItemCart from "components/screens/Cart/ItemCart"

const Checkout = () => {
  const {cart, totalAmount} = useCartContext();

  return (   
    <section className='checkout'>
      <h2>Finalizar compra</h2>
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