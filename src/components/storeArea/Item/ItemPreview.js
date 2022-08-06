import React from 'react'

const ItemPreview = ({name, id,date, time, image, priceMin, priceMax, status}) => {
   
  return (
    <>
    <div className="imgDate">
      <img className="imgEvents" src={image} alt={name}></img>
      <div className="date">
      <p>{date[8]+date[9]}</p>
      <p>{date[5]+date[6]}</p>
      </div>
    </div>
    <div className="cardText">
      <h4>{name}</h4>
      <p>{time}</p>
      <p>Precios: {priceMin} € - {priceMax} € </p>
   </div>
  </>
  )
}

export default ItemPreview