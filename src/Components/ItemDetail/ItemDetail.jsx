import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

export default function ItemDetail({ instrumento }) {
    function onAdd(valor) {
        alert("Usted agrego " + valor + " " + instrumento.title + " al carrito de compras!")
    }

    return (
        <>
            <div className="containerDetail">
                <div className="cardDetail">
                    <img src={instrumento.pictureUrl}
                        alt={instrumento.title} />
                </div>
                <div className="Detail">
                    <div className="infoDetail">
                        <h2>{instrumento.title}</h2>
                        <p className="infopDetail">id:{instrumento.id}</p>
                    </div>
                    <div className="precioDetail">
                        <div className="box_precioDetail">
                            <span className="precio2Detail"><b>Precio: ${instrumento.price}</b></span>
                        </div>
                    </div>
                    <ItemCount stock={instrumento.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </>
    )
}
