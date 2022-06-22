import React, {useEffect, useState} from 'react'

export default function TestPromise() {
    const [items, setItems] = useState([])
    const productos = [
        {
            id: "1",
            name: "Zapatilla",
            description: "Zapatilla amarilla",
            stock: 10
        },
        {
            id: "2",
            name: "Remera",
            description: "Remera roja",
            stock: 15
        },
        {
            id: "3",
            name: "Campera",
            description: "Campera verde",
            stock: 20
        },
    ]
    useEffect(() => {
        new Promise((res, rej) => {
            res(productos.filter(producto => producto.stock > 15) )
        }).then((res) => setItems(res))
    }, [])
    
    
  return (
    <div>{items.length && items.map(item=> <span>{item.id} / {item.name}</span>)}</div>
  )
}
