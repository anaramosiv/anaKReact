import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './itemDetail.css'
import {AiOutlineTag } from "react-icons/ai";
import { motion } from "framer-motion";
import { toRightEffect } from 'components/helpers/FramerMotion/FramerMotion'
import IncDecrease from 'components/views/IncDecrease/IncDecrease'
import DetailCard from './DetailCard'


const ItemDetail = ({detalle}) => {
  const [addCart, setAddCart] = useState(false);
  return (
      <section className="cardBoss areaCards">

        <h2 className="detailTittle"><span><AiOutlineTag/> </span>  Detalle de Entrada</h2>
        <motion.div className="cardComplete" 
                    variants={toRightEffect}>

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
    </section>
    
  )
}


export default ItemDetail

