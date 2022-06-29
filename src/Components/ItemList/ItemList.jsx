import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

export default function ItemList({listaProductos}) {
  return (
    <div className="container">
      {
        listaProductos.map((item) => <Item key={item.id} id={item.id} stock={item.stock} price={item.price} title={item.title} pictureUrl={item.pictureUrl} />
        )
      }
      </div>
  )
}
