
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing'
import Footer from './components/footer/Footer';
import ItemListContainer from './screens/ItemListContainer';
import ItemDetail from './components/storeArea/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/storeArea/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/Landing/NavBar/NavBar';
import ItemList2 from './components/storeArea/ItemList/ItemList2';

function App() {
  return (
   <BrowserRouter>
      {/* <ItemListContainer/> */}
      <NavBar/>
   
      
      
      <Routes>
        <Route exact path ="/" element= { <Landing/>} />
        <Route exact path ="/ListContainer" element= { <ItemListContainer/>} />
        <Route exact path ="/itemDetail" element= { <ItemList2/>} />
      
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
