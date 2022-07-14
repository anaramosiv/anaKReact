import React , { useState, useEffect }  from 'react';
import './IncDecrease.css'

export const IncDecrease = ({stock, minAdd, onAdd}) => {
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
    <div className="incDecrease">
      <p>Cantidad</p>
      <button onClick={() => handleStockRestar({minAdd})}> - </button>
      <span> {start} </span>
      <button onClick={() => handleStockSumar({stock})}> + </button>
      <button disabled={minAdd<=0} onClick={()=>onAdd(start)} className="addCart">Agregar al Carrito</button>
    </div>
  );
  
};
export default IncDecrease