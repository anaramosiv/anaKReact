import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext/CartContext'
import './cart.css'
import ItemCart from './ItemCart';


const Cart = () => {

  const {cart, totalItems,totalAmount, wipeCart,} = useCartContext();

  console.log("Componente cart",cart);

  if (cart.length === 0){
    return(
    <div className='areaCart'>
        <h4>No has agregado nada al carrito</h4>
        <Link to ="/events"> Ir a comprar</Link>
    </div>
    )
  }
  return (

  <section>

        <div className='areaCart'></div> 
        <h2>Carrito de compras</h2>

    <div>{
     cart.map(item => <ItemCart key={item.id} item ={item}/>)
    }
      
    </div>
        <p>Unidades {totalItems()}</p>
        <p>total $ {totalAmount()}</p>
        
        <button onClick={()=> wipeCart()}>Vaciar Carrito</button>
    </section>


  )
}

export default Cart