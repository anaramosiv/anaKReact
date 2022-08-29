import useLocalStorage from 'hooks/useLocalStorage';
import React, { useContext} from 'react'


 const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext (CartContext)


const CartProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage("cart", []);

    const addProduct =(item, quantity) =>{
        if ( isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product;

            }));
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }



    const totalAmount = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.priceMax, 0).toFixed(2);
    }



  const totalItems =()=> cart.reduce((value, lastValue) => value + lastValue.quantity, 0);




    const wipeCart =() =>setCart ([]);

    const isInCart = (id) =>{
        // return cart.find(product => product.id === id) ? true : false;
        return cart.some(product => product.id === id);
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