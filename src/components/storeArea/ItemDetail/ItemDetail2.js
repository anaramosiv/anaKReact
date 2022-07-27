import React from 'react'
import IncDecrease from '../IncDecrease/IncDecrease'
import './ItemDetail.css'


const ItemDetail2 = ({detalle, onAdd}) => {
  return (

      <section className="cardBoss cardDetail">
        <article className="cardComplete">
         <div className="imgDate">
          <img className="imgEvents" src={detalle.image} alt={detalle.nombre}></img>
          </div>

          <div className="cardText">
          <h4>{detalle.name}</h4>
          <p>{detalle.descripcion }</p>
          <p>Fecha: {detalle.date} a las {detalle.time}</p>
          <a href = {detalle.url} target="_blank" rel="noreferrer">CLICK AQUÍ Para ampliar la información</a>
          <p>Precio: {detalle.priceMax} € </p>
          </div>
          <div  className="goDetails">
          <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/>
          </div>
      
      </article>
    </section>
  )
}

export default ItemDetail2