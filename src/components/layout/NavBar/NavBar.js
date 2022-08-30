import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import navItems from 'components/helpers/navItems';
import CartWidget from 'components/layout/carWidget/CartWidget';
import LogoBrand from 'components/layout/logoBrand/LogoBrand';

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