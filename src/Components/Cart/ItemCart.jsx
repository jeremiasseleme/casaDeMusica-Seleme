import React, { useContext } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';

export default function ItemCart({item}) {

  const { removeItem } = useContext(myCartContext);

  return (
    <div className="container">
       <img src={item.pictureUrl} alt={item.title} />
       <div> {item.title} cantidad {item.cantidad}</div>
       <button onClick={() => removeItem(item.id)}>Eliminame</button>
    </div>
  )
}
