import React from 'react'
import './ItemDetail.css'
import IncDecrease from '../IncDecrease/IncDecrease'



const ItemDetail = ({nombre, id, date, time, image, priceMin, priceMax, direccion, estado, ciudad, ubicacion,}) => {
  return (
    <section>
      <h2>Detalle de entradas</h2>
        <div className="cardBoss">
        <div className="cardComplete">
        {/* <div className="imgDate">
          <img className="imgEvents" src={image} alt={nombre}></img>
          <div className="date">
     
          <p>{date[0]+date[1]}</p>
          <p>{date[3]+date[4]+date[5]}</p>
          </div>
        </div>
        <div className="cardText">
          <h4>{nombre}</h4> */}
          <p>{estado}</p>
          <p>{ubicacion}</p>
          <p>{ciudad}</p>
          <p>{direccion}</p>
          <p>{id}</p>
          {/* <p>{time}</p>
          <p>Precios: {priceMin} € </p> */}
       </div>
       {/* <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/> */}
    </div>
    {/* </div>
    */}
    
    </section>
  )
}

export default ItemDetail