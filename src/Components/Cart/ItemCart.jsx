import React, { useContext } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import "./Cart.css"

export default function ItemCart({item}) {

  const { removeItem } = useContext(myCartContext);

  return (
    <div className="containerrr">
       <img className="mt-3 " src={item.pictureUrl} alt={item.title} />
       <div className="text-center p-5 "> <span className="text-center p-4">{item.title}</span></div>
       <div className="">Cantidad: {item.cantidad}</div>
       <h6 className="p-5 text-center ">Subtotal: ${item.price * item.cantidad}</h6>
       <button className="btn btn-danger mb-3 " onClick={() => removeItem(item.id)}>Eliminame</button>
    </div>
  )
}
