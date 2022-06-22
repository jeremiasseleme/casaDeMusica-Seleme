import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css";

export default function Item({id, price, title, pictureUrl}) {
    function onAdd(valor){
        alert("Usted agrego " + valor + " " + title + " al carrito de compras!")
       }
     
    return (
        <div className="cont_productos ">
            <div className="card">
                <img src={pictureUrl}
                    alt={title} />
            </div>
            <div className="info">
                <h2>{title} id:{id}</h2>
                <p className="infop"></p>
            </div>
            <div className="precio">
                <div className="box_precio">
                    <span className="precio2"><b>Precio: ${price}</b></span>
                </div>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}
