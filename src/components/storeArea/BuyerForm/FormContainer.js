import React, {useState, useEffect} from 'react'
import BuyerForm from './BuyerForm';
import { useCartContext } from '../../../context/CartContext/CartContext';
import {getFirestore, collection, addDoc, doc, getDoc} from "firebase/firestore"
import CartOrderPlacement from "../CartOrderPlacement/CartOrderPlacement";
import { useNavigate } from 'react-router-dom';


const FormContainer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phone:""
    });
    
    const [id, setId] = useState();
    // const [fullOrder, setFullOrder]  = useState({})

    
    // let history = useNavigate();

    const {cart, totalAmount,  wipeCart} =useCartContext();
    const {name, email, address, phone} = form
  
    const order ={
        buyer:
        {name: {name},
        email: {email},
        phone: {phone},
        address:{address}
        },
        items: cart.map(ticket =>({id: ticket.id, tittle: ticket.name, price: ticket.priceMax, quantity: ticket.quantity})),
        total: totalAmount(),
    }

    const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]: value});
        }
  

    const sendFirebase = ()=>{

        const db = getFirestore();
        const ordersCollection =collection(db, "orders");
        // setFullOrder(order);
        addDoc(ordersCollection, order).then(snapshot => setId(snapshot.id));
        wipeCart();
  
    }
    
    
    // console.log("Esta es toda la orden", fullOrder)
    // useEffect(() => {
    //     if (id){
    //         const db =getFirestore();
    //         //Consulta un documento dentro de la colección que tenga esa ID
    //         const queryDoc = doc(db, "orders", id);
    //         getDoc(queryDoc)
    //         //Setear el detalle con los datos obtenidos de firebase
    //         //data es el objeto con la informacion, firebase lo tiene con ese nombre.
    //         .then(res=> setOrderData({id: res.id, ...res.data()}));
        
    //     }
  
   
    //       }, [id])

        //  
  return (
    <div>
    {(typeof id !== "undefined") ?
    <CartOrderPlacement 
    id={id}
    form={form}/>
    :
    <BuyerForm sendFirebase ={sendFirebase} 
    form ={form} 
    changeHandler={changeHandler}
    id={id}     
       />
    }
       </div>
  
  )
}

export default FormContainer