import React, {useState, useContext} from 'react'
import Item from '../../components/storeArea/Item/item';

 const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext (CartContext)


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // const addProduct =(item, newQuantity)=>{
    //     const newCart =cart.filter(prod=> prod.id!==item.id);
    //     newCart.push ({...item, quantity:newQuantity})
    //     setCart (newCart);

    // }
    // const addProduct =(item, newQuantity)=>{
    //     const {quantity  = 0} = cart.find(prod =>prod.item.id === item.id) || {};
    //     const newCart = cart.filter(prod => prod.item.id !== item.id);
    //     setCart ([...newCart, {item,  quantity: quantity + newQuantity}])

    // }
    const addProduct =(item, quantity) =>{
        if ( isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product;

            }));
        }else{
            setCart([...cart, {...item, quantity}])
        }


    }

    console.log('carrito', cart)
    const wipeCart =() =>setCart ([]);

    const isInCart = (id) =>{
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct =(id) => setCart(cart.filter(product => product.id !==id))


  return (
    <CartContext.Provider value= {{
        wipeCart,
        isInCart,
        removeProduct,
        addProduct,
        cart


    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider