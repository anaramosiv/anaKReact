import React from 'react'
import { Link } from 'react-router-dom';
import "./item.css"
import  barcode  from "image/barcode.png"
import ItemPreview from './ItemPreview';

const Item = ({name, id, date, time, image, priceMax, status}) => {

  return (
    <article className= {`${status!== "onsale"? "disabled cardComplete": "cardComplete"} `} >
      <ItemPreview name= {name} id={id} date ={date} time ={time} image= {image} priceMax= {priceMax} status={status} />
      <div  className="goDetails">
        <div className="idCode">
          <img src={barcode} alt="barcode"></img>
          <p>{id}</p>
        </div>
      <Link className="boton" to={`/detalle/${id}`}>Ver Detalle</Link> 
      </div>
    </article>
  )
}

export default Item