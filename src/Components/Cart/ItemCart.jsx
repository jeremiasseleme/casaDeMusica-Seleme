import React, { useContext } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import "./Cart.css"

export default function ItemCart({item}) {

  const { removeItem } = useContext(myCartContext);

  return (
    <div className="containerrr">
       <img src={item.pictureUrl} alt={item.title} />
       <div className="p-5"> <span className="p-4">{item.title}</span>   <b>Cantidad: {item.cantidad}</b></div>
       <h6 className="p-5 text-center">Subtotal: ${item.price * item.cantidad}</h6>
       <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminame</button>
    </div>
  )
}
