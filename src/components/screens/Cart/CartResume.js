import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from 'context/CartContext/CartContext';

const CartResume = () => {
    
    const {totalItems,totalAmount,wipeCart} = useCartContext();
    
  return (
    <div className="cartResume">
       <div className="totales">
        <p className="totalU">Unidades: {totalItems()}</p>
        <p className="totalA">Total:  {totalAmount()} € </p>
        <Link to={"/checkout"} className ="botonB">Finalizar compra</Link>
              <button className="vaciar" onClick={()=> wipeCart()}>Vaciar Carrito</button>
        </div>
    
    </div> 

  
  )
}

export default CartResume