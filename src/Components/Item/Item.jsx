import React from 'react'
import "./Item.css";
import { Link } from "react-router-dom"

export default function Item({ id, stock, price, title, pictureUrl }) {


    return (
        <div className="cont_productos">
            <Link to={`/item/${id}`} className="text-decoration-none text-dark">
                <div className="card">
                    <img src={pictureUrl}
                        alt={title} />
                </div>
                <div className="info">
                    <h2>{title}</h2>
                </div>
                <div className="precio">
                    <div className="box_precio">
                        <span className="precio2"><b>Precio: ${price}</b></span>
                    </div>
                </div>
                <p>Stock: {stock}</p>
                {/* <button className="btnDetalles">Detalles🔍</button> */}
        </Link>
            </div>
    )
}
