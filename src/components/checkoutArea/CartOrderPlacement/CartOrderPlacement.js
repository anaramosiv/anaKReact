import React from 'react'

const CartOrderPlacement = ({id, form}) => {

  console.log("Esta es la id para consultar datos de la compra", id)

  return (
    
    <>
     <h4> Compra realizada con id: {id}</h4> 

      <p>{form.name}, Tu pedido ha sido procesado </p>
      <p>en tu email {form.email} recibirás todos los datos</p>   

    </>
  )
}

export default CartOrderPlacement