import React from 'react'
import { useCartContext } from 'context/CartContext/CartContext'
import './cart.css'
import ItemCart from 'components/screens/Cart/ItemCart';
import CartResume from 'components/screens/Cart/CartResume';
import CartCard from 'components/views/Cart/CartCards';
import EmptyCart from 'components/screens/Cart/EmptyCart';

const Cart = () => {

  const {cart} = useCartContext();

  if (cart.length === 0){
    return(
      <EmptyCart/>
    )
  }
  return (

  <section className="areaCart">
    <div className="cartFull">
      <h2 className="cartTittle">Carrito de compras</h2>
      <article className="cartResume">{ 
      cart.map(item => <ItemCart key={item.id} item ={item}/>)
      }
      </article>
      <CartResume/>
    </div>

    <CartCard/>

  </section>


  )
}

export default Cart