import React from 'react';
import { useState } from 'react';
const Counter = () => {
  const valor=0;
  const [contador, setContador] = useState(0);
  const masCont= () => setContador(contador+1);
  const menosCont= ()=>setContador(contador-1);
  return (
   
    <> 
      <button className='btn btn-dark' onClick={() =>menosCont()}>-</button>
        {contador}
      <button className='btn btn-dark' onClick={()=> masCont()}>+</button>
      
    
    </>
  );
}

export default Counter;
