import Item from '../Item/item';
import 'react-loading-skeleton/dist/skeleton.css'



const Itemlist = ({events}) => {
        
    return ( 

        <section className='areaCards'>
        <h2 className="areaCardsTittle">Próximos eventos</h2>
          
       <div>
        {events.map((entradas ) =>{
          return (
            <Item  key = {entradas.id} {...entradas}

                                            />
          )
        }
        )}
       </div>
      </section>
);
};

export default Itemlist