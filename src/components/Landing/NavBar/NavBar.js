import React from 'react'
import './NavBar.css';
import navItems from '../NavItems/navItems';
import CartWidget from '../carWidget/CartWidget';
import LogoBrand from '../logoBrand/LogoBrand';
import { NavLink } from 'react-router-dom';
const NavBar = () => {

  return (
    <div>
    <header className ="navBar">
      <LogoBrand/>
      <ul>
        {/* <NavLink to="/ListContainer">AQUI A ITEM</Link> */}
        {navItems.map(items=>{
          const {id, item, path}=items
          return(
            <li key={id}> <NavLink to={path}>{item}</NavLink></li>
            // <li key={id}><a href="#">{item}</a></li>
          )
        })}
  
    </ul>
    <CartWidget/>

  </header>
  </div>
  )
}

export default NavBar