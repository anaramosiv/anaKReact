import React from 'react'
import { month } from 'components/helpers/Months';
import {AiOutlineEuro, AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";


const ItemPreview = ({name, date, time, image,  priceMax}) => {
  return (
    <>
    <div className="imgDate">
      <img className="imgEvents" src={image} alt={name}></img>
      <div className="date">
      <p>{date[8]+date[9]}</p>
      <p>{month(date[5], date[6])}</p>
      </div>
    </div>
    <div className="cardText">
      <h4>{name}</h4>
      <p> <span><AiOutlineClockCircle size={16}/> </span>{time}</p>
      <p> <span><AiOutlineCalendar size={16}/> </span>{date}</p>
      <p className="priceCard"> <AiOutlineEuro size={16}/> Precio: {priceMax} € </p>
   </div>
  </>
  )
}

export default ItemPreview