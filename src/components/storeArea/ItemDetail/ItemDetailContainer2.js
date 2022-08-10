import React, {useEffect, useState} from 'react'

import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../Loader';
import ItemDetail2 from './ItemDetail2'
import { useParams } from 'react-router-dom';
import {getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer2 = () => {

    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading]= useState(true);

    const {detalleId} =useParams();


      useEffect(() => {
        const db =getFirestore();
        //Consulta un documento dentro de la colección que tenga esa ID
        const queryDoc = doc(db, "eventos", detalleId);
        getDoc(queryDoc)
        //Setear el detalle con los datos obtenidos de firebase
        //data es el objeto con la informacion, firebase lo tiene con ese nombre.
        .then(res=> setDetalle({id: res.id, ...res.data()}))

        setLoading(false);
            
          }, [detalleId])

           if (loading === true ){
            return (
                <Loader/>

            )
          }else {
            return(
              <main>
                <ItemDetail2 detalle = {detalle} />
              </main>
            )

            }




  }


export default ItemDetailContainer2