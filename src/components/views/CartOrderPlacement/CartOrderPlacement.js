import React, {useEffect} from 'react'
import { useCartContext } from 'context/CartContext/CartContext'
import 'components/views/CartOrderPlacement/cartOrderPlacement.css'

const CartOrderPlacement = ({id, form}) => {

  const {wipeCart} =useCartContext();

  useEffect(() => {
    //una vez generada la orden se limpia el carrito
    wipeCart()

    //Dejo este único --console.log-- para poder recuperar los datos de la compra en caso de hacer una consulta
    console.log("Esta es la id para consultar datos de la compra", id)

  }, [])
    
  return (
      <div className='placement'>
        <h4> Compra realizada con id: {id}</h4> 
        <p>{form.name}, Tu pedido ha sido procesado </p>
        <p>En tu email {form.email} recibirás todos los datos</p>   
      </div>
  )
}

export default CartOrderPlacement