import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Tittle from './components/tittle/Tittle';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Tittle titulo="El mejor precio para tus boletos" subtitulo="Vive la música al máximo"/>
      <Footer/>

    </div>
  );
}

export default App;
