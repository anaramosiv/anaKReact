import Item from '../Item/item';
import { container } from '../../FramerMotion/FramerMotion.js'
import { motion } from "framer-motion";
import 'react-loading-skeleton/dist/skeleton.css'





const ItemList = ({events}) => {
        
    return ( 

        <>
        <h2 className="areaCardsTittle">Próximos eventos</h2>
          
       <motion.div className='cardBoss'
       	variants={container}
         initial="hidden"
         animate="visible"
       
  
       
       >
        {events.map((entradas ) =>{
          return (
            <Item  key = {entradas.id} {...entradas}

                                            />
          )
        }
        )}
       </motion.div>
      </>
);
};

export default ItemList