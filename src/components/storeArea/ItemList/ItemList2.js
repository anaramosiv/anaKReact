import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import Item from '../Item/item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList2 = () => {

    const  [events, setEvents] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);

    const myApiKey = 'R8QHauoGPbXmWSCABBrb3ebAOFHyumDN';

    useEffect(()=>{
    
    const apiConsult = async () =>{
        

        const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=ES&apikey=${myApiKey}&size=20`;
        const response = await fetch (url);
        const data = await response.json();
        setEvents(data._embedded.events);
        // setTimeout(() => {
                    setIsLoading(true)
                    // }, 3000);


    }
    apiConsult();
    
    },[]);

    if (isLoading === false ){
        return (
            <Loader/>
        )
      }
      else{



  return (
    <> {events.map((entradas)=> {
        return (
            <div key={entradas.id}>
    
            <Item nombre = {entradas.name} 
                        // descripcion ={entradas.descripcion}
                        date = {entradas.dates.start.localDate}
                        time = {entradas.dates.start.localTime}
                        image = {entradas.images[0].url}
                        priceMin = {entradas.priceRanges[0].min}
                        priceMax = {entradas.priceRanges[0].max}
                        status = {entradas.dates.status.code}/>

            <ItemDetailContainer id= {entradas.id} />
                                 
            </div>

       )}          
        )};    
     </>
  )}
}

export default ItemList2