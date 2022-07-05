import React from 'react'
import Item from '../Item/Item'
import Slider from '../Slider/Slider'
import "./ItemList.css"

export default function ItemList({listaProductos}) {
  return (
    <div className="containerr">
      <Slider/>
      {
        listaProductos.map((item) => <Item key={item.id} id={item.id} stock={item.stock} price={item.price} title={item.title} pictureUrl={item.pictureUrl} />
        )
      }
      </div>
  )
}
