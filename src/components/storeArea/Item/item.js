import React from 'react'
import IncDecrease from '../IncDecrease/IncDecrease'

const Item = ({nombre, id, date, time, image, priceMin, priceMax, onAdd}) => {
  return (
    <div>
        <img src={image} alt={nombre}></img>
        <h4>{nombre}</h4>
        <p>{date}</p>
        <p>{time}</p>
        <p>Precios: {priceMin} € - {priceMax} € </p>
        <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/>
    </div>
  )
}

export default Item