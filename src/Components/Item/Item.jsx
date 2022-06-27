import React from 'react'
import "./Item.css";
import { Link } from "react-router-dom"

export default function Item({id, price, title, pictureUrl}) {
    
     
    return (
        <div className="cont_productos ">
            <div className="card">
                <img src={pictureUrl}
                    alt={title} />
            </div>
            <div className="info">
                <h2>{title}</h2>
                <p className="infop">id:{id}</p>
            </div>
            <div className="precio">
                <div className="box_precio">
                    <span className="precio2"><b>Precio: ${price}</b></span>
                </div>
            </div>
            <Link to={`/item/${id}`}>
            <button className="btnDetalles btn-primary mx-auto">Detalles🔍</button>
            </Link>
        </div>
    )
}
