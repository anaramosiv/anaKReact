import React from 'react'
import './NavBar.css';
import navItems from '../NavItems/navItems';
import CartWidget from '../carWidget/CartWidget';
import LogoBrand from '../logoBrand/LogoBrand';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

  return (
    <>
    <header className ="navBar">
      <LogoBrand/>
      <ul>
        
        {navItems.map(items=>{
          const {id, item, path}=items
          return(
            <li key={id}> <NavLink to={path}>{item}</NavLink></li>
         
          )
        })}
  
    </ul>
    <CartWidget/>

  </header>
  </>
  )
}

export default NavBar