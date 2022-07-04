import React from 'react'
import { Link } from 'react-router-dom';
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
                        <h2 className="mb-4">{instrumento.title}</h2>
                        <p>Stock: {instrumento.stock} ID: {instrumento.id}</p>
                        <p className="infopDetail"><b>Detalle: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius optio similique, porro possimus ab. Tenetur atque voluptas amet reprehenderit nemo possimus, aut deleniti nisi laborum vel deserunt recusandae velit, dolorem iste, quod cupiditate obcaecati sed ratione quia fuga pariatur. Ipsum, veritatis cum? Modi hic iure ducimus. Corporis sequi nihil magni, libero aspernatur, doloribus repudiandae nam, tempora sapiente provident reprehenderit?</p>
                    </div>
                    <div className="precioDetail">
                        <div className="box_precioDetail">
                            <span className="precio2Detail"><b>${instrumento.price}</b></span>
                        </div>
                    </div>
                    <Link to="/cart"><button className="btnComprar btn btn-primary">Comprar ahora</button></Link>
                    <ItemCount stock={instrumento.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </>
    )
}
