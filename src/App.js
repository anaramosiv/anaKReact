
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/screens/Landing/Landing'
import Footer from './components/layout/Footer/Footer';
import ItemListContainer from 'components/views/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/views/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/layout/NavBar/NavBar';
import Cart from './components/views/Cart/Cart';
import CartProvider from './context/CartContext/CartContext';
import Checkout from './components/screens/Checkout/Checkout';
import CartOrderPlacement from './components/views/CartOrderPlacement/CartOrderPlacement';
import ErrorPage from './components/ErrorPage/ErrorPage';
import OrderDetailContainer from './components/views/OrderDetailContainer/OrderDetailContainer';
import Firebase from 'components/helpers/Firebase';

function App() {
  return (
    <>  
     <BrowserRouter>
        <CartProvider>
          <NavBar/>  
          <Routes>
            <Route path ="/" element= {<Landing/>} />
            <Route path ="/events" element = { <ItemListContainer/>}/>
            <Route path ="/categoria/:categoriaId" element= { <ItemListContainer/>} />
            <Route path ="/detalle/:detalleId" element ={<ItemDetailContainer/>}/>
            <Route path ="/carrito" element ={<Cart />}/>
            <Route path="/checkout" element ={<Checkout/>}/>
            <Route path='/placement' element = {<CartOrderPlacement/>}/>
            <Route path ='/myorder' element={<OrderDetailContainer/>}/>
            <Route path ="*" element ={<ErrorPage/>} />
            </Routes>
        </CartProvider>
        <Footer/>
     </BrowserRouter>
   
    </>
  );
}

export default App;
