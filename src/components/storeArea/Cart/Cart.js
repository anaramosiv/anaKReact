import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'
import ItemCart from './ItemCart';
import CartResume from './CartResume';
import CartCard from './CartCards';
import EmptyCart from './EmptyCart';

const Cart = () => {

  const {cart} = useCartContext();



  if (cart.length === 0){
    return(
      <EmptyCart/>
    )
  }
  return (

  <section className='areaCart'>

      
   

    <div className='cartFull'>
    <h2 className='areaCardsTittle'>Carrito de compras</h2>
    <article className='cartResume'>{
     
     cart.map(item => <ItemCart key={item.id} item ={item}/>)
    }
    </article>

    <CartResume/>
    </div>
  
  
    <CartCard/>
  
  
    </section>


  )
}

export default Cart