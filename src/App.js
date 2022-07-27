
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing'
import Footer from './components/footer/Footer';
import ItemListContainer from './screens/ItemListContainer';

import ItemDetailContainer2 from './components/storeArea/ItemDetail/ItemDetailContainer2';
import NavBar from './components/Landing/NavBar/NavBar';


function App() {
  return (
    <>
   <BrowserRouter>

      <NavBar/>     
      <Routes>
        <Route path ="/" element= {<Landing/>} />
        <Route path ="/events" element = { <ItemListContainer/>}/>
        <Route path ="/ListContainer/:categoriaId" element= { <ItemListContainer/>} />
        <Route path ="/detalle/:detalleId" element ={<ItemDetailContainer2/>}/>
            
      </Routes>
  
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
