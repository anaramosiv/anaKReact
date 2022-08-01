import React from 'react'
import './cartwidget.css';
import cart from '../../../image/cart.svg'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    
        <div>
          <Link  className = 'Cart' to="/carrito">
            <img src = {cart} alt="logo"/>
            <p>Carrito</p>
          </Link>
        </div>
 
  )
}

export default CartWidget