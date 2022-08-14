import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'
import ItemCart from './ItemCart';
import CartResume from './CartResume';

import BuyerForm from '../../storeArea/BuyerForm/BuyerForm'
import FormContainer from '../BuyerForm/FormContainer';
import Checkout from '../Checkout/Checkout';


const Cart = () => {

  const {cart, totalItems,totalAmount,wipeCart} = useCartContext();

  console.log("Componente cart",cart);

  if (cart.length === 0){
    return(
    <div className='areaCart'>
        <h3 className='cartEmpty'>Carrito de compras</h3>
        <h4>No has agregado nada al carrito</h4>
        <Link to ="/events"> Ir a comprar</Link>
    </div>
    )
  }
  return (

  <section className='areaCart'>

      
        <h3 className='cartFull'>Carrito de compras</h3>
    
    
    <div className='cartResume'>{
     
     cart.map(item => <ItemCart key={item.id} item ={item}/>)
    }
    </div>

    <CartResume/>

 

   
    </section>


  )
}

export default Cart