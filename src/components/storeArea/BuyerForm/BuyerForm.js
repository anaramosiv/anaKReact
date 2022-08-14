import React from "react";
import CartOrderPlacement from "../CartOrderPlacement/CartOrderPlacement";



const BuyerForm = ({form,changeHandler,sendFirebase, id, fullOrder}) => {

 
    const handleSubmit = (ev) => {
        ev.preventDefault();
          sendFirebase();
    }     

  return (
    <div>
        {(typeof id !== "undefined") ?
        <div>
        <h4> Compra realizada con id: {id}</h4> 

        <CartOrderPlacement id={id}
                           form={form}
                        //    fullOrder={fullOrder}
                        />
        </div>      :
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input name="name" id="name" value={form.name} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="address">Dirección</label>
                <textarea name="address" id="address" value={form.address} onChange={changeHandler}></textarea>
            </div>
            <div>
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" name="phone" id="phone" value={form.phone} onChange={changeHandler} />
            </div>
            <div>
                <button type="submit"> Confirmar compra</button>
            </div>
            
        </form>
         }
    </div>
    
  )
}

export default BuyerForm