import React from 'react'
import '../screens/itemListContainer.css'
import Itemlist from '../../src/components/storeArea/ItemList/itemlist'


const ItemListContainer = () => {
  
  const onAdd =(quantity)=>{

    console.log(`has añadido ${quantity} entradas al carrito`)
      
  }

  return (
    <section className='areaCards'>
      <h2 className="areaCardsTittle">Próximos eventos</h2>
        <Itemlist onAdd = {onAdd} />

    </section>
  )
}

export default ItemListContainer