import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";


const EmptyCart = () => {
  return (
    <div className="areaCartEmpty">
    <h2 className="areaCardsTittle">Carrito de compras vacío</h2>
 
    <MdOutlineAddShoppingCart size={100}/>
    <h4>No has agregado nada al carrito :(</h4>
       <Link to ="/events">Ir a comprar algo </Link>
  
</div>
  )
}

export default EmptyCart