import React from 'react'
import './NavBar.css';
import navItems from '../NavItems/navItems';
import CartWidget from '../carWidget/CartWidget';
import LogoBrand from '../logoBrand/LogoBrand';
const NavBar = () => {

  return (
    <div>
    <header className ="navBar">
      <LogoBrand/>
      <ul>
        {navItems.map(items=>{
          const {id, item}=items
          return(
            <li key={id}><a href="#">{item}</a></li>
          )
        })}
  
    </ul>
    <CartWidget/>

  </header>
  </div>
  )
}

export default NavBar