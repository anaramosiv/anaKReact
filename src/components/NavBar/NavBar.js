import React from 'react'
import './NavBar.css';
import myimage from './../../image/logotipo.png'
import cart from './../../image/cart.png'
const NavBar = () => {
  return (
    <div>
    <header className ="navBar">
    <div className="tittle">
        <img src = {myimage} alt="logo"/>
        <p>OndaTickets</p>
    </div>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Conciertos</a></li>
      <li><a href="#">Festivales</a></li>

    </ul>
    <div className='cart'>
        <img src = {cart} alt="logo"/>
        <a href="#">Carrito</a>
    </div>
  </header>
  </div>
  )
}

export default NavBar