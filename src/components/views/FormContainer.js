import React, {useState} from 'react'
import BuyerForm from 'components/screens/BuyerForm/BuyerForm';
import { useCartContext } from 'context/CartContext/CartContext';
import {getFirestore, collection, addDoc} from "firebase/firestore"
import CartOrderPlacement from "components/views/CartOrderPlacement/CartOrderPlacement";

const FormContainer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phone:"",
       
    });
    
    const [id, setId] = useState();
    const [emailMatch, setEmailMatch] = useState(false)

    const {cart, totalAmount} =useCartContext();
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
        }

    const sendFirebase = ()=>{
        const db = getFirestore();
        const ordersCollection =collection(db, "orders");
           addDoc(ordersCollection, order).then(snapshot => setId(snapshot.id));   
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
    id={id}
    emailMatch={emailMatch}
       />
    }
       </div>
  )
}

export default FormContainer