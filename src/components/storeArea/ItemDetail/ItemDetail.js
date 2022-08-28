import React from 'react'
import IncDecrease from '../IncDecrease/IncDecrease'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEuro, AiOutlineClockCircle, AiOutlineCalendar, AiOutlineTag } from "react-icons/ai";
import { useCartContext } from '../../../context/CartContext/CartContext'
import { downUpEffect } from '../../FramerMotion/FramerMotion.js'
import { motion } from "framer-motion";



const ItemDetail = ({detalle}) => {
  const [addCart, setAddCart] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const {addProduct} = useCartContext(detalle, quantity);

  // ----------Prueba fallida en curso para seleccionar opciones de precio y colocarla en un estado--------
  // const [priceSelected, setPriceSelected] =useState(detalle.priceMin);

  const onAdd =(quantity)=>{
    setAddCart(true)
    setQuantity (quantity)
    addProduct(detalle, quantity)

}
  return (

      <section className="cardBoss areaCards">

        <h2 className='areaCardsTittle'><span><AiOutlineTag/> </span>  Detalle de Entrada</h2>
        <motion.div className="cardComplete" 
        variants={downUpEffect}>
         <div className="imgDate">
          <img className="imgEvents" src={detalle.image} alt={detalle.nombre}></img>
          </div>

          <div className="cardText">
          <h4>{detalle.name}</h4>
          <p>{detalle.descripcion }</p>
          <p> <span><AiOutlineCalendar/> </span> {detalle.date} </p> 
           <p> <span><AiOutlineClockCircle/> </span>  {detalle.time}</p>
          <a href = {detalle.url} target="_blank" rel="noreferrer">Más info Aquí</a>

          {/* ---------/Estoy tratando de filtrar las entradas por categoría. Aún no me sale :/ ------*/}
          {/* <form>   
            <input type="radio" id="priceMin" name="ticketType" value={()=>setPriceSelected(detalle.priceMin)} checked/>
            <label for="general">Entrada General: {detalle.priceMin}</label>
            <input type="radio" id="priceMax" name="ticketType" value={()=>setPriceSelected(detalle.priceMax)}/>
            <label for="premium">Entrada Premium: {detalle.priceMax}</label>
          </form> */}
          <p><span><AiOutlineEuro/></span> Precio: {detalle.priceMax} € </p>
          </div>
          <div  className="goDetails">
            {
              addCart
              ? <><Link to="/carrito" className="boton">Ir Al Carrito</Link>

                </>
                      
              : <IncDecrease  minAdd ={1} stock ={10} onAdd ={onAdd}/>
              
            }
      
          </div>
      
      </motion.div>
    </section>
  )
}

export default ItemDetail