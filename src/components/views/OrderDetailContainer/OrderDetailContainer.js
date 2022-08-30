import React, { useState } from 'react'
import {getFirestore, getDoc, doc} from 'firebase/firestore'
import OrderDetail from 'components/screens/OrderDetail'
import './orderDetail.css'
const OrderDetailContainer = () => {
   
const [id, setId] = useState("");
const [order, setOrder] = useState()

const handleBuscar = ()=>{
const db = getFirestore();
const orderRef = doc(db, "orders", id);

getDoc(orderRef).then(snapshot =>{
  if(snapshot.data()){
    setOrder({id:snapshot.id, ...snapshot.data()})
  }});
}

//Setea el valor introducido en el input para consultar la orden
const inputIdHandler = (ev)=>{
    setId(ev.target.value);
    setOrder();
}
  return (
    <section className="checkout">
      <h2>Introduce el id para ver los datos de tu compra</h2>
      <div className="searchZone">
        <input onChange={inputIdHandler} value= {id}/>
        <button onClick={()=>handleBuscar()} className="searchButton">BUSCAR</button>
      </div>
      {(!order)?
       <div className="searchZone"><p>No se ha encontrado la compra</p></div>
      :
       <OrderDetail order={order}/>
       }

    </section>
  )
}

export default OrderDetailContainer