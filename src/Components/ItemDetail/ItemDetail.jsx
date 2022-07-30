import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import { useContext } from 'react';
import Toastify from 'toastify-js'

export default function ItemDetail({ instrumento }) {

    const { addItem } = useContext(myCartContext);

    const [cantidad, setCantidad] = useState();

    function onAdd(valor) {
        Toastify({
            text: "Usted agrego " + valor + " " + instrumento.title + " al carrito de compras!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "fuchsia",
            },
            onClick: function(){} 
          }).showToast();
        setCantidad(valor)
        addItem(instrumento, valor)
    }


    return (
        <div className="containerDetail">
            <div className="cardDetail">
                <img src={instrumento.pictureUrl}
                    alt={instrumento.title} />
            </div>
            <div className="Detail">
                <div className="infoDetail">
                    <h2 className="mb-4 mt-3">{instrumento.title}</h2>
                    <p>Stock: {instrumento.stock}</p>
                    <p className="infopDetail"><b>Detalle: </b>{instrumento.description}</p>
                </div>
                <div className="precioDetail">
                    <div className="box_precioDetail">
                        <span className="precio2Detail">${instrumento.price}</span>
                    </div>
                </div>
                {!cantidad > 0 &&
                <ItemCount stock={instrumento.stock} initial={1} onAdd={onAdd} />
            }
                {cantidad > 0 &&
                <>
                <Link to="/"><button className="btnComprar btn btn-primary">Seguir Comprando</button></Link>
                    <Link to="/cart"><button className="mt-2 btnComprar btn btn-primary">Terminar compra</button></Link>
                    </>
                }
            </div>
        </div>
    )
}
