import React from 'react'
import './itemListContainer.css'
import IncDecrease from '../IncDecrease/IncDecrease'


const ItemListContainer = () => {
  
  const onAdd =(quantity)=>{

    console.log(`has añadido ${quantity} entradas al carrito`)
      
  }

  return (
    <section className='areaCards'>

        <IncDecrease minAdd ={1} stock ={10} onAdd = {onAdd}/>
    </section>
  )
}

export default ItemListContainer