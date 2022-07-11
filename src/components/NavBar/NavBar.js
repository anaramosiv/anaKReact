import React from 'react'
import './NavBar.css';
import myimage from './../../image/logotipo.png'
import CartWidget from '../carWidget/CartWidget';
import LogoBrand from '../logoBrand/LogoBrand';
const NavBar = () => {
  return (
    <div>
    <header className ="navBar">
      <LogoBrand/>
      <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Conciertos</a></li>
      <li><a href="#">Festivales</a></li>
    </ul>
    <CartWidget/>

  </header>
  </div>
  )
}

export default NavBar