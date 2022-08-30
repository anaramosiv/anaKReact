import React from 'react'
import './itemDetail.css'
import {AiOutlineEuro, AiOutlineClockCircle, AiOutlineCalendar, AiOutlineInfoCircle } from "react-icons/ai";

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
            <a href = {detalle.url} target="_blank" rel="noreferrer"><span><AiOutlineInfoCircle/></span> Más info Aquí</a>
            <p className="priceCard"><span><AiOutlineEuro/></span> Precio: {detalle.priceMax} € </p>
       </div>
    </>
  )
}

export default DetailCard