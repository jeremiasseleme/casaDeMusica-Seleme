import React from 'react'
import Item from '../Item/Item'

export default function ItemList(listaProductos) {
  return (
    <div>
      {
        listaProductos.map((item) => {
          <Item key={item.id} id={item.id} price={item.price} title={item.title} pictureUrl={item.pictureUrl} />
        })
      }
      </div>
  )
}
