import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const myCartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    
function addItem(item, cantidadItems){

    // setCart([...cart, {...item, cantidad: cantidadItems}])
    if(isInCart(item.id)){
        let nuevoCart = cart; 
        let indexProducto = nuevoCart.findIndex(instrumento=> instrumento.id === item.id); 
        nuevoCart[indexProducto].cantidad = Number(nuevoCart[indexProducto].cantidad) + Number(cantidadItems);
        setCart([...nuevoCart]); 
        
    }else{
        setCart([...cart, {...item, cantidad:cantidadItems }])
    }
    setCantidad(cantidad + cantidadItems)
}

function removeItem(itemID){
    const removedItem = cart.find((instrumento) => instrumento.id === itemID)
    setCart(cart.filter((instrumento) => instrumento.id !== itemID))
    setCantidad(cantidad - removedItem.cantidad)
}

function clear(){
    setCart([])
}

function isInCart(id) {
    return cart.find( item => item.id === id)
}


    return (
        <>
            <myCartContext.Provider value={{cart, addItem, removeItem, clear, cantidad}}>
                {children}
            </myCartContext.Provider>
        </>
    )
}
