
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing'
import Footer from './components/footer/Footer';
import ItemListContainer from './screens/ItemListContainer';
import ItemDetailContainer2 from './components/storeArea/ItemDetail/ItemDetailContainer2';
import NavBar from './components/Landing/NavBar/NavBar';
import Cart from './components/storeArea/Cart/Cart';
import CartProvider from './context/CartContext/CartContext';



function App() {
  return (
    <>
    
      
      <BrowserRouter>
        <CartProvider>
          <NavBar/>  
          <Routes>
            <Route path ="/" element= {<Landing/>} />
            <Route path ="/events" element = { <ItemListContainer/>}/>
            <Route path ="/ListContainer/:categoriaId" element= { <ItemListContainer/>} />
            <Route path ="/detalle/:detalleId" element ={<ItemDetailContainer2/>}/>
            <Route path ="/carrito" element ={<Cart />}/>
            </Routes>
        </CartProvider>
        <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
