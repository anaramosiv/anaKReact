import React, { useState } from 'react'

import {getFirestore, getDoc, doc} from 'firebase/firestore'
const OrderDetailContainer = () => {

  //Componente en fase de elaboración

    // const [id, setId] = useState("qYM4JHNN6iobsP6tp59l");    
const [id, setId] = useState("");
const [order, setOrder] = useState()


const handleBuscar = ()=>{
//  console.log('id',id)
const db = getFirestore();
const orderRef = doc(db, "orders", id);
getDoc(orderRef).then(snapshot => setOrder({id:snapshot.id, ...snapshot.data()}))

}

const inputIdHandler = (e)=>{
    setId(e.target.value);
    // console.log(e.target.value)
  
}
// Esto lo debbo pasar a otro componente que reciba los parametros
  return (
    <section className='checkout'>
        <h2>Introduce el id para ver los datos de tu compra</h2>
       <input onChange={inputIdHandler} value= {id}/>
       <button onClick={()=>handleBuscar()}>BUSCAR</button>
       
       {(!order)?
       <div>No se ha encontrado la compra</div>
       :
    //    Aqui seguiré colocando datos
       <div> pedido con id: {order.id}
       <p> a nombre de Id: {order.buyer.name.name}</p>
       </div>
       }

    </section>
  )
}

export default OrderDetailContainer