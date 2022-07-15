import React from 'react'
import './itemListContainer.css'
import Itemlist from '../ItemList/itemlist'


const ItemListContainer = () => {
  
  const onAdd =(quantity)=>{

    console.log(`has añadido ${quantity} entradas al carrito`)
      
  }

  return (
    <section className='areaCards'>
        <Itemlist onAdd = {onAdd} />

    </section>
  )
}

export default ItemListContainer