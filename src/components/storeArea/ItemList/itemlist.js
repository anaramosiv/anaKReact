import React, {useEffect, useState} from 'react'
import eventos from './info'
import Item from '../Item/item';


const Itemlist = ({onAdd}) => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
    
        const promesa = new Promise(function (resolve, rejected) {
               
                setTimeout(() => {
                resolve(eventos)
                }, 3000);
        
        });
         promesa.then((res)=>{
            setEvents(res)
         }
         )}, [])
       
    return ( 
    <div> {events.map((entradas)=> {
        return (
            <div key={entradas.id}>
    
            <Item nombre = {entradas.name} 
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
    )
}

export default Itemlist