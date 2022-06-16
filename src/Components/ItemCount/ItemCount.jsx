import React, { useState } from 'react'


export default function ItemCount({stock, initial, onAdd}) {

    // let auxInitial = initial;

    const [auxInitial, setAuxInitial] = useState(initial);

    function restar() {
        if (auxInitial != 1){
        setAuxInitial(auxInitial - 1);
        }
        }

    function sumar() {
        if (auxInitial != stock){
            setAuxInitial(auxInitial + 1);
    }
    }
  return (
    <div className="contador">
        <div><button onClick={() => restar()}>-</button></div>
        <div>{auxInitial}</div>
        <div><button onClick={() => sumar()}>+</button></div>
        <button onClick={() => onAdd(auxInitial) }>Agregar al carrito</button>
    </div>
  )
}
