import React from 'react'
import myimage from './../../image/logotipo.png'
import './logoBrand.css';

const LogoBrand = () => {
  return (
    <div className="brand">
    <img src = {myimage} alt="logo"/>
    <p>OndaTickets</p>
</div>
  )
}

export default LogoBrand