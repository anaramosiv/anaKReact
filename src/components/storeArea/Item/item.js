import React from 'react'
import IncDecrease from '../IncDecrease/IncDecrease'
import "./item.css"

const Item = ({nombre, id, date, time, image, priceMin, priceMax, onAdd}) => {
  return (
    <div className="cardBoss">
    <div className="cardComplete">
        <div className="imgDate">
          <img className="imgEvents" src={image} alt={nombre}></img>
          <div className="date">
            {/* Cuando traiga esto de la api lo convierto a string de otra manera */}
          <p>{date[0]+date[1]}</p>
          <p>{date[3]+date[4]+date[5]}</p>
          </div>
        </div>
        <div className="cardText">
          <h4>{nombre}</h4>
          <p>{time}</p>
          <p>Precios: {priceMin} € - {priceMax} € </p>
       </div>
       <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/>
    </div>
    </div>
  )
}

export default Item