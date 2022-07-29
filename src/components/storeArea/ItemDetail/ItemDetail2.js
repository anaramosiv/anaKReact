import React from 'react'
import IncDecrease from '../IncDecrease/IncDecrease'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail2 = ({detalle}) => {
  const [addCart, setAddCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const onAdd =(quantity)=>{
    setAddCart(true)
    setQuantity (quantity)

}

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
            {
              addCart
              ? <div><Link to="/carrito" className="boton">Ir Al Carrito</Link>
                <p style={{padding: "1rem"}}>Has agregado {quantity} entradas al carrito</p>
                </div>
                      
              : <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/>
              
            }
      
          </div>
      
      </article>
    </section>
  )
}

export default ItemDetail2