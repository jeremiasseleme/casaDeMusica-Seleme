import React from 'react'
import "./Item.css";

export default function Item(id, price, title, pictureUrl) {
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
                    <span className="precio2"><b>${price}</b></span>
                </div>
            </div>
        </div>
    )
}
