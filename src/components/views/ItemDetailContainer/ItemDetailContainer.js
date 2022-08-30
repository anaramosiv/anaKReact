import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {getFirestore, getDoc, doc} from 'firebase/firestore'
import { container } from 'components/helpers/FramerMotion/FramerMotion'
import { motion } from 'framer-motion';
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from 'components/screens/Loader';
import ItemDetail from 'components/screens/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading]= useState(true);

    const {detalleId} =useParams();

      useEffect(() => {
        const db =getFirestore();
        //Consulta un documento dentro de la colección que tenga esa ID
        const queryDoc = doc(db, "eventos", detalleId);
        getDoc(queryDoc)
        .then(res=> setDetalle({id: res.id, ...res.data()}))
        setLoading(false);          
          }, [detalleId])

           if (loading === true ){
            return (
                <Loader/>
            )
          }else {
            return(
              <motion.div
              variants={container}
              initial="hidden"
              animate="visible">   
                <ItemDetail detalle = {detalle} />
              </motion.div>
            )

            }




  }


export default ItemDetailContainer