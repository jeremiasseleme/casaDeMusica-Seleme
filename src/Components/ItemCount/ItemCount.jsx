import React, { useState } from 'react'
import "./ItemCount.css";


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
    <div className="bg-dark contador">
        <div><button className="btn-danger" onClick={() => restar()}>-</button></div>
        <div className="text-light num">{auxInitial}</div>
        <div><button className="btn-success" onClick={() => sumar()}>+</button></div>
        <button className="btn-warning" onClick={() => onAdd(auxInitial) }>Agregar al carrito</button>
    </div>
  )
}
