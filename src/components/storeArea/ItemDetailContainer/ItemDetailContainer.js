import React, {useEffect, useState} from 'react'
import eventos from '../ItemList/info'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Loader';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({onAdd}) => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading]= useState(false)
  
    useEffect(() => {
     
        const promesa = new Promise(function (resolve, rejected) {
               
                setTimeout(() => {
                resolve(eventos)
                }, 3000);
        
        });
         promesa.then((res)=>{
            setEvents(res);
            setIsLoading(true)
            
         }
         )}, [])



      if (isLoading === false ){
        return (
            <Loader/>
        )
      }
      else{
       
    return ( 

    <div> {events.map((entradas)=> {
        return (
            <div key={entradas.id}>
    
            <ItemDetail nombre = {entradas.name} 
                        descripcion ={entradas.descripcion}
                        date = {entradas.date}
                        time = {entradas.time}
                        image = {entradas.image}
                        priceMin = {entradas.priceMin}
                        priceMax = {entradas.priceMax}
                        status = {entradas.status}
                        onAdd = {onAdd}

            
            /></div>

       )}          
        )};    
     </div>
    )}
}

export default ItemDetailContainer