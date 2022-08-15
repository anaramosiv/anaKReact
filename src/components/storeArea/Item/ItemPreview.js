import React from 'react'
import {AiOutlineEuro, AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";

const ItemPreview = ({name, id,date, time, image, priceMin, priceMax, status}) => {

    //Función para transformar los meses que vienen en número, en letras
    const month = (number1, number2) =>{

    let mes = number1 + number2;

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    
    return(
      meses[mes-1]
    )
  }

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
      <p>Precios: <AiOutlineEuro size={16}/> {priceMin} - {priceMax} € </p>
   </div>
  </>
  )
}

export default ItemPreview