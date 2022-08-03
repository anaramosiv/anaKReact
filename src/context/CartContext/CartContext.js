import React, {useState, useContext} from 'react'
import Item from '../../components/storeArea/Item/item';

 const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext (CartContext)


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

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

    const totalAmount = () =>{
        return cart.reduce((prev, last) => prev + last.quantity * last.priceMax, 0);
    }

    console.log("monto", (totalAmount()))

  const totalItems =()=> cart.reduce((value, lastValue) => value + lastValue.quantity, 0);
    console.log( "total", totalItems())



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
        cart,
        totalAmount,
        totalItems


    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider