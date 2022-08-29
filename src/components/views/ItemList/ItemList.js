import Item from 'components/storeArea/Item/item';
import { container } from '../../FramerMotion/FramerMotion.js'
import 'react-loading-skeleton/dist/skeleton.css'





const ItemList = ({events}) => {
        
    return ( 

        <>
        <h2 className="areaCardsTittle">Próximos eventos</h2>
          
       <div className='cardBoss'
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
       </div>
      </>
);
};

export default ItemList