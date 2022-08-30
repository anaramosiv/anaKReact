import React from 'react'
import { Link } from 'react-router-dom';
import myimage from 'image/OndaTickets.svg'
import './logoBrand.css';



const LogoBrand = () => {
  return (
    <div className="brand">
      <Link to={"/"}>
      <img className = "imgLogo" src = {myimage} alt="logo"/>
      OndaTickets
      </Link>
  </div>
  )
}

export default LogoBrand