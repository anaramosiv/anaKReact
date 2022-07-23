
import './App.css';
import Landing from './screens/Landing'
import Footer from './components/footer/Footer';
import ItemListContainer from './screens/ItemListContainer';
import ItemDetail from './components/storeArea/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/storeArea/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/Landing/NavBar/NavBar';

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Landing/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
      <Footer/>

    </div>
  );
}

export default App;
