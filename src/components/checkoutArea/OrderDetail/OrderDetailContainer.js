import React, { useState } from 'react'

import {getFirestore, getDoc, doc} from 'firebase/firestore'
import OrderDetail from './OrderDetail';
import "./orderDetail.css"
const OrderDetailContainer = () => {

   
const [id, setId] = useState("");
const [order, setOrder] = useState()

const handleBuscar = ()=>{

const db = getFirestore();
const orderRef = doc(db, "orders", id);

getDoc(orderRef).then(snapshot =>{
  if(snapshot.data()){
    setOrder({id:snapshot.id, ...snapshot.data()})
  }

} 
  )

}



console.log(order)

const inputIdHandler = (ev)=>{
    setId(ev.target.value);
    setOrder();
    console.log(ev.target.value)
  
}
// Esto lo debbo pasar a otro componente que reciba los parametros
  return (
    <section className='checkout'>
        <h2>Introduce el id para ver los datos de tu compra</h2>
        <div className="searchZone">
       <input onChange={inputIdHandler} value= {id}/>
       <button onClick={()=>handleBuscar()} className="searchButton">BUSCAR</button>
       </div>
       {(!order)?
       <div className='searchZone'>No se ha encontrado la compra</div>
       :

       <OrderDetail order={order}/>
    //    Aqui seguiré colocando datos
 
       }

    </section>
  )
}

export default OrderDetailContainer