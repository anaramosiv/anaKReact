import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Tittle from './components/tittle/Tittle';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/storeArea/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      
      <NavBar/>
      <Tittle titulo="El mejor precio para tus boletos" subtitulo="Vive la música al máximo"/>
      <ItemListContainer/>
       <Footer/>

    </div>
  );
}

export default App;
