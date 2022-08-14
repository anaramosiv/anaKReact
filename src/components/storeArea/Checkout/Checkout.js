import React from 'react'
import FormContainer from '../BuyerForm/FormContainer'
import ItemCart from "../Cart/ItemCart"
import { useCartContext } from '../../../context/CartContext/CartContext'




const Checkout = () => {
  const {cart} = useCartContext();

  return (
    <div className='checkout'>
    {/* Recuerda borrar la clase checkout del css cart */}
        <FormContainer/>
        {cart.map(item => <ItemCart key={item.id} item ={item}/>)}
        {/* <p>Asegurate que todos los datos esten correctos y Finaliza tu orden</p>
        <button>Finalizar Order </button> */}
        
    </div>
  )
}

export default Checkout