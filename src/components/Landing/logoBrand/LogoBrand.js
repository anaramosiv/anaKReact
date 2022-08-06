import React from 'react'
import myimage from './../../../image/OndaTickets.svg'
import './logoBrand.css';
import { Link } from 'react-router-dom';


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