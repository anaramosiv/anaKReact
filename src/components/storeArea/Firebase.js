import React, {useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import eventos from './ItemList/info';


const Firebase = () => {

    const firebaseConfig = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: "anakramos-4b7c1.firebaseapp.com",
        projectId: "anakramos-4b7c1",
        storageBucket: "anakramos-4b7c1.appspot.com",
        messagingSenderId: "268849570376",
        appId: "1:268849570376:web:147a020eab575f01122e7d"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
    
    //   
      useEffect(() => {
        
       const write = async(id ,name, image,descripcion, date, status, time, priceMin, priceMax, genrename, Location, city, address, category, url)=>{
        await setDoc(doc(db, `eventos`, `${id}`),{
           
            'id': id,
            "name": name,
            "image": image,
            "descripcion":descripcion,
            "date": date,
            "status":status,
            "time": time,
            "priceMin": priceMin,
            "priceMax": priceMax,
            "genrename": genrename,
            "Location": Location,
            "city": city,
            "address": address,
            "category": category,
            "url": url
        });


       }

      eventos.map((item) =>{
        write(item.id,item.name, item.image, item.descripcion, item.date, item.status, item.time, item.priceMin, item.priceMax, item.genrename, item.Location, item.city, item.address, item.category, item.url)
      }
      )
      

        
      }, [])
      


  return (
    <div>Firebase</div>
  )
}

export default Firebase