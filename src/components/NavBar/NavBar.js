import React from 'react'
import './NavBar.css';
import CartWidget from '../carWidget/CartWidget';
import LogoBrand from '../logoBrand/LogoBrand';
const NavBar = () => {
  const navItems = ["Inicio", "Conciertos", "Festivales"];
  return (
    <div>
    <header className ="navBar">
      <LogoBrand/>
      <ul>
        {navItems.map(item=>{
          return(
            <li><a href="#">{item}</a></li>
          )
        })}
      {/*Estructura anterior
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Conciertos</a></li>
      <li><a href="#">Festivales</a></li> */}
    </ul>
    <CartWidget/>

  </header>
  </div>
  )
}

export default NavBar