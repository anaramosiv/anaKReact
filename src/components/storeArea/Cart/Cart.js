import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'
import ItemCart from './ItemCart';
import CartResume from './CartResume';
import CartCard from './CartCards';

const Cart = () => {

  const {cart} = useCartContext();



  if (cart.length === 0){
    return(
    <div className='areaCartEmpty'>
        <h3 className='cartEmpty'>Carrito de compras</h3>
        <h4>No has agregado nada al carrito</h4>
       
        <Link to ="/events">Ir a comprar algo </Link>
      
    </div>
    )
  }
  return (

  <section className='areaCart'>

      
   

    <div className='cartFull'>
    <h3>Carrito de compras</h3>
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