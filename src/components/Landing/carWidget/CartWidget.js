import React from 'react'
import './cartwidget.css';
import cart from '../../../image/cart.svg'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext/CartContext';


const CartWidget = () => {
  const {totalItems} =useCartContext()
  return (
    
        <div>
          <Link  className = 'Cart' to="/carrito">
            <img src = {cart} alt="logo"/>
            <p>Carrito <span>{totalItems() !== 0 && totalItems() }</span></p>
          </Link>
        </div>
 
  )
}

export default CartWidget