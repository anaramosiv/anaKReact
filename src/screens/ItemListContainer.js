import React, {useEffect, useState} from 'react'
import eventos from '../components/storeArea/ItemList/info'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../components/storeArea/Loader';
import Itemlist from '../components/storeArea/ItemList/Itemlist';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {


  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const {categoriaId} =useParams();

  
    useEffect(() => {
     
        const promesa = new Promise(function (resolve, rejected) {
               
                setTimeout(() => {
                setIsLoading(false)
                resolve(eventos)
                }, 500);
        
        }); 
        if (categoriaId){
        
          promesa.then(res => setEvents(res.filter(Conciertos => Conciertos.category === categoriaId )));
  
        }else{
   
          promesa.then(res =>setEvents(res))
        }        
        
        }, [categoriaId])

         if (isLoading === true ){
          return (
              <Loader/>
          )
        }else {
          return(
            <main>
              <Itemlist events = {events}/>
            </main>
          )

        }
        


}

export default ItemListContainer