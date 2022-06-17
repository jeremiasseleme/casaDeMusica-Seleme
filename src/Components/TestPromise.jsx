import React from 'react'

export default function TestPromise() {
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
    
   const array = new Promise((res, rej) => {
        res(productos.filter(producto => producto.stock > 15) )
   })
   array.then((res) => console.log(res))
  return (
    <div>TestPromise</div>
  )
}
