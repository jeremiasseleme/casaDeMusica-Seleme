import React from 'react'
import { Link } from 'react-router-dom'

export default function CartVacio() {
  return (
    <div>
        <h1>El carrito esta vacio</h1>
        <Link to="/"><button>Volver a comprar!</button></Link>
    </div>
  )
}
