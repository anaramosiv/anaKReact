import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';




const Item = ({name, id, date, time, image, priceMin, priceMax, status}) => {


  return (
    <section className="cardBoss">
    <article className="cardComplete">
        <div className="imgDate">
          <img className="imgEvents" src={image} alt={name}></img>
          <div className="date">
            {/* Cuando traiga esto de la api lo convierto a string de otra manera */}
          <p>{date[8]+date[9]}</p>
          <p>{date[5]+date[6]}</p>
          </div>
        </div>
        <div className="cardText">
          <h4>{name}</h4>
          <p>{time}</p>
          <p>Precios: {priceMin} € - {priceMax} € </p>
       </div>
   
       <div  className="goDetails">
        <Link className="boton" to={`/detalle/${id}`}>Ver Detalle</Link> 
       </div>
    </article>
    </section>
  )
}

export default Item