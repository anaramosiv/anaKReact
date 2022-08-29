import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext/CartContext";
import './buyerForm.css'


const BuyerForm = ({form,changeHandler,sendFirebase, emailMatch}) => {

    const {cart } =useCartContext();
  
    const handleSubmit = (ev) => {
        ev.preventDefault();
            if (emailMatch === true){
            sendFirebase();
        }
    }
   return (

    <div>
            <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label htmlFor="name">Nombre</label>
                <input name="name" id="name" value={form.name} onChange={changeHandler} required />
            </div>
            <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={changeHandler} required/>
            </div>
            <div className="formInput">
                <label htmlFor="email">Escribe de nuevo el email</label>
                <input type="email" name="email2" id="email" value=  {form.email2} onChange={changeHandler} required/>
            </div>
            {(emailMatch)? <p>Los email coinciden</p> : <p className="formError">Las direcciones de Email deben coincidir para generar la orden</p>}
            <div className="formInput">
                <label htmlFor="address">Dirección</label>
                <textarea name="address" id="address" value={form.address}  onChange={changeHandler} required></textarea>
            </div>
            <div className="formInput">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" id="phone" value={form.phone} onChange={changeHandler} required />
            </div>

            {(cart.length !== 0) ?
            <div>
               <p className="advertisement">Asegúrate que todos los datos estén correctos y finaliza tu orden</p>
                <button type="submit" className="buttonPlacement"> Confirmar compra</button>          
            </div>
            :
            <div className="emptyForm">
                <p className="formError">No hay nada cargado en el carrito, debes tener algo cargado para realizar tu compra</p>
                <Link to ="/events" className="buttonPlacement">Ir a comprar algo </Link>
            </div>
            }
            
           
        </form>     
    
    </div>
    
  )
}

export default BuyerForm