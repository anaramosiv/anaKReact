import React from 'react'
import IncDecrease from 'components/views/IncDecrease/IncDecrease'
import './itemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineTag } from "react-icons/ai";
import { downUpEffect } from 'components/helpers/FramerMotion/FramerMotion'
import { motion } from "framer-motion";
import DetailCard from './DetailCard'


const ItemDetail = ({detalle}) => {
  const [addCart, setAddCart] = useState(false);
  return (
      <section className="cardBoss areaCards">

        <h2 className='areaCardsTittle'><span><AiOutlineTag/> </span>  Detalle de Entrada</h2>
        <motion.div className="cardComplete" 
                    variants={downUpEffect}>

          <DetailCard detalle={detalle}/>
            <div  className="goDetails">
                {
                  addCart ?
                  <>
                    <Link to="/carrito" className="boton">Ir Al Carrito</Link>
                  </>   
                  : 
                  <>
                    {detalle.status !== "onsale" && <p className='formError'>Evento no disponible por el momento, próximamente a reprogramar</p>}
                    <IncDecrease  minAdd ={1} stock ={8} setAddCart ={setAddCart} detalle={detalle}/>
                  </> 
                    }
          </div>
      </motion.div>
        {/* ---------/Estoy tratando de filtrar las entradas por categoría. Aún no me sale :/ ------*/}
          {/* <form>   
            <input type="radio" id="priceMin" name="ticketType" value={()=>setPriceSelected(detalle.priceMin)} checked/>
            <label for="general">Entrada General: {detalle.priceMin}</label>
            <input type="radio" id="priceMax" name="ticketType" value={()=>setPriceSelected(detalle.priceMax)}/>
            <label for="premium">Entrada Premium: {detalle.priceMax}</label>
          </form> */}
    </section>
    
  )
}


export default ItemDetail

