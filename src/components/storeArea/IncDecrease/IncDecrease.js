import React , { useState, useEffect }  from 'react';
import './IncDecrease.css'

export const IncDecrease = ({stock, minAdd, onAdd, status}) => {
  const [start, setStart] = useState(parseInt(minAdd));

  const handleStockSumar = () => {
    if (start >= stock) {
      setStart(stock);
    } else {
      setStart(start + 1);
    }
  };
  const handleStockRestar = () => {
    if (start <= minAdd) {
      setStart(minAdd);
    } else {
      setStart(start - 1);
    };
  }

  useEffect(()=>{
    setStart(parseInt(minAdd));
  },
  [minAdd]
  )

  return (
    <div className={`${status!== "onsale"? " incDecrease buttonDisabled": "incDecrease"} `}>
      <p>Cantidad</p>
      <div className="sumRest">
      <button onClick={() => handleStockRestar({minAdd})}> - </button>
      <span> {start} </span>
      <button onClick={() => handleStockSumar({stock})}> + </button>
      </div>
      <button disabled={minAdd<=0} onClick={()=>onAdd(start)} className= "addCart">Agregar al Carrito</button>
    </div>
  );
  
};
export default IncDecrease