import Item from 'components/screens/Item/item';
import 'react-loading-skeleton/dist/skeleton.css'

const ItemList = ({events}) => {
        
    return ( 
        <>
        <h2 className="areaCardsTittle">Próximos eventos</h2>          
        <div className='cardBoss'>
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