import React from 'react'
import { Link } from 'react-router-dom';
import './cartwidget.css';
import cart from 'image/cart.svg'
import { useCartContext } from 'context/CartContext/CartContext';

const CartWidget = () => {
  const {totalItems} =useCartContext()
  return (
       <div className = "cart">
          <Link  to="/carrito">
            <img src = {cart} alt="logo"/>
            Carrito <span>{totalItems() !== 0 && totalItems() }</span>
          </Link>
        </div>
  )
}

export default CartWidget