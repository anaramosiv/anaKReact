import React, {useEffect, useState} from 'react'
import eventos from '../ItemList/info'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Loader';
import ItemDetail2 from './ItemDetail2'
import { useParams } from 'react-router-dom';

const ItemDetailContainer2 = () => {

    const onAdd =(quantity)=>{

        alert(`has añadido ${quantity} entradas al carrito`)
    }

    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading]= useState(true);

    const {detalleId} =useParams();


      useEffect(() => {

          const promesa = new Promise(function (resolve) {

                  setTimeout(() => {
                  setLoading(false)
                  resolve(eventos)
                  },  2000);


          });

      
            promesa.then(resolve =>{
            setDetalle(resolve.find(detalle => detalle.id === detalleId ))
            
            
            });
              

          }, [])

           if (loading === true ){
            return (
                <Loader/>

            )
          }else {
            return(
              <main>

                <ItemDetail2 detalle = {detalle} onAdd = {onAdd}/>
              </main>
            )

            }




  }


export default ItemDetailContainer2