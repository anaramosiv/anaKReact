import React from 'react'
import "./item.css"
import  barcode  from "./../../../image/barcode.png"
import { Link } from 'react-router-dom';
import ItemPreview from './ItemPreview';




const Item = ({name, id, date, time, image, priceMin, priceMax, status}) => {


  return (
    <article className="cardComplete"
    
    >
      <ItemPreview name= {name} id={id} date ={date} time ={time} image= {image} priceMin={priceMin} priceMax= {priceMax} />
      <div  className="goDetails">
        <div className='idCode'>
          <img src={barcode} alt='barcode'></img>
          <p>{id}</p>
        </div>

      <Link className="boton" to={`/detalle/${id}`}>Ver Detalle</Link> 
      </div>
    </article>

  )
}

export default Item