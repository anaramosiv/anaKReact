import React, {useState} from 'react'
import BuyerForm from '../BuyerForm/BuyerForm';
import { useCartContext } from '../../../context/CartContext/CartContext';
import {getFirestore, collection, addDoc} from "firebase/firestore"
import CartOrderPlacement from "../CartOrderPlacement/CartOrderPlacement";
import './formContainer.css'




const FormContainer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phone:"",
       
    });
    
    const [id, setId] = useState();
    const [emailMatch, setEmailMatch] = useState(false)

    const {cart, totalAmount,  wipeCart} =useCartContext();
    const {name, email, address, phone} = form

  
    const order ={
        buyer:
        {name: {name},
        email: {email},
        phone: {phone},
        address:{address},
        orderDate : new Date(Date.now()).toLocaleDateString()
     
        },
        items: cart.map(ticket =>({id: ticket.id, tittle: ticket.name, price: ticket.priceMax, quantity: ticket.quantity})),
        total: totalAmount(),
    }



    const changeHandler = (ev) => {
            const {value, name} = ev.target;
            setForm({...form, [name]: value})
           
            if (name=== 'email2'){
                if (form.email === ev.target.value){
                    setEmailMatch(true)
                }else{
                    setEmailMatch(false)
                }

            }
            
           
            // compareHandler()
            // if (name==='email'){
            //     validateHandlerMail(ev.target.value)
            // }
                     
        }



    const sendFirebase = ()=>{
        const db = getFirestore();
        const ordersCollection =collection(db, "orders");
        // setFullOrder(order);
        addDoc(ordersCollection, order).then(snapshot => setId(snapshot.id));
            
    }
    const validateHandlerMail = (text) => {
        const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i);
        if(!emailRegex.test(text)){
          console.log('email no valido');
        }
      }


  return (
    <div className='formContainer'>
    {(typeof id !== "undefined") ?

    <CartOrderPlacement 
    id={id}
    form={form}
   />

    :
    <BuyerForm sendFirebase ={sendFirebase} 
    form ={form} 
    changeHandler={changeHandler}
    validateHandlerMail={validateHandlerMail}
    id={id}
    emailMatch={emailMatch}
       />
    }
       </div>
  
  )
}

export default FormContainer