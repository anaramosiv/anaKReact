import React, {useEffect, useState} from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Loader';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({id}) => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading]= useState(false);

    const myApiKey = 'BgtwTXNjWPQlQGtWrd90KnOyyM4hZEzU'; 
    // const id = "Z698xZ2qZa6C4" 

    useEffect(() => {

        const consultarApi = async () =>{
            try {
                const url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${myApiKey}`
                const response = await fetch (url, { mode: 'no-cors'});
                const data = await response.json();
                // console.log(data._embedded.events)
                setEvents([data]);
                console.log(typeof([data]));
                // setTimeout(() => {
                //             (setIsLoading(true))
                //             }, 3000);
            setIsLoading(true);
            } catch (error) {
              console.log('error', error)  
            }
    
        }
    
        consultarApi();

     
        // const promesa = new Promise(function (resolve, rejected) {
               
        //         setTimeout(() => {
        //         resolve(eventos)
        //         }, 3000);
        
        // });
        //  promesa.then((res)=>{
        //     setEvents(res);
        //     setIsLoading(true)
            
        //  }
        //  )
        
        }, [])



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
             {console.log(entradas.id)}
    
            <ItemDetail nombre = {entradas.name} 
                        // descripcion ={entradas.descripcion}
                        ciudad = {entradas._embedded.venues[0].city.name}
                        ubicacion = {entradas._embedded.venues[0].name}
                        estado = {entradas._embedded.venues[0].state.name}
                        direccion = {entradas._embedded.venues[0].address.line1}
                        id= {entradas.id}

                        // date = {entradas.dates.start.localDate}
                        // time = {entradas.dates.start.localTime}
                        // image = {entradas.images[0].url}
                        // priceMin = {entradas.priceRanges[0].min}
                        // priceMax = {entradas.priceRanges[0].max}
                        // status = {entradas.dates.status.code}
                        // onAdd = {onAdd}

            
            /></div>

       )}          
        )};    
     </div>
    )}
}

export default ItemDetailContainer