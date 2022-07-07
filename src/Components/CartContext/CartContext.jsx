import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const myCartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)

function addItem(item, cantidadItems){
    setCantidad(cantidad + cantidadItems)
}

function removeItem(itemID){
    cart.find((instrumento) => instrumento.id === itemID) && this.remove()
}

function clear(){
    setCart([])
}

function isInCart(id){
//  return i | -1
}

    return (
        <>
            <myCartContext.Provider value={{addItem, removeItem, clear, isInCart, cantidad}}>
                {children}
            </myCartContext.Provider>
        </>
    )
}
