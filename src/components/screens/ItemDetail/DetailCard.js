import React from 'react'
import {AiOutlineEuro, AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import './itemDetail.css'

const DetailCard = ({detalle}) => {
  return (
    <>
        <div className="imgDate">
            <img className="imgEvents" src={detalle.image} alt={detalle.nombre}></img>
        </div>
        <div className="cardText">
            <h4>{detalle.name}</h4>
            <p>{detalle.descripcion }</p>
            <p> <span><AiOutlineCalendar/> </span> {detalle.date} </p> 
            <p> <span><AiOutlineClockCircle/> </span>  {detalle.time}</p>
            <a href = {detalle.url} target="_blank" rel="noreferrer">Más info Aquí</a>
            <p><span><AiOutlineEuro/></span> Precio: {detalle.priceMax} € </p>
       </div>
    </>
  )
}

export default DetailCard