import React from 'react'
import './cartwidget.css';
import cart from '../../../image/cart.svg'

const CartWidget = () => {
  return (
    <div>
        <div className='cart'>
        <img src = {cart} alt="logo"/>
        <a href="#">Carrito</a>
    </div>
    </div>
  )
}

export default CartWidget