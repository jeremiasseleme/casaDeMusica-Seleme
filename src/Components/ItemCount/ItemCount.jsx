import React, { useState } from 'react'
import "./ItemCount.css";


export default function ItemCount({stock, initial, onAdd}) {

    // let auxInitial = initial;

    const [auxInitial, setAuxInitial] = useState(initial);

    function restar() {
        if (auxInitial !== 1){
        setAuxInitial(auxInitial - 1);
        }
        }

    function sumar() {
        if (auxInitial !== stock){
            setAuxInitial(auxInitial + 1);
    }
    }
  return (
    <div className="bg-dark contador">
        <div><button className="btn btn-light" onClick={() => restar()}>-</button></div>
        <div className="text-light num">{auxInitial}</div>
        <div><button className="btn btnSumar btn-light" onClick={() => sumar()}>+</button></div>
        <button className="btn btn-success" onClick={() => onAdd(auxInitial) }>Agregar al carrito</button>
    </div>
  )
}
