import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';
import ItemPreview from './ItemPreview';


const Item = ({name, id, date, time, image, priceMin, priceMax, status}) => {


  return (
    <article className="cardComplete">
      <ItemPreview name= {name} id={id} date ={date} time ={time} image= {image} priceMin={priceMin} priceMax= {priceMax} />
      <div  className="goDetails">
      <Link className="boton" to={`/detalle/${id}`}>Ver Detalle</Link> 
      </div>
    </article>

  )
}

export default Item