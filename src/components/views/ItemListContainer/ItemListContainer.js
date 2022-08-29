import React, {useEffect, useState} from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from 'components/storeArea/Loader';
import ItemList from 'components/views/ItemList/ItemList';
import './itemListContainer.css'  
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {


  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const {categoriaId} =useParams();

  
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection =collection(db, "eventos");
        // Filtra por categoría y muestra la categoría
        if (categoriaId){
   
            const qfilter =query(itemsCollection, where("category", "==", categoriaId));
            getDocs(qfilter).then(snapshot => {
              const data = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
              data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              setEvents(data);
              setIsLoading(false)
      
            })
        }
          // Si no se filtra, devuelve todo....
        else{
            getDocs(itemsCollection).then(snapshot => {
            const data = snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
            data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            setEvents(data);
            setIsLoading(false)   
           
  
          })      
        }        
        
        }, [categoriaId])

         if (isLoading === true ){
          return (
              <Loader/>
    
          )
        }else {
          return(
            <section className='areaCards'>
              <ItemList events = {events}/>
            </section>
          )
        }

}

export default ItemListContainer