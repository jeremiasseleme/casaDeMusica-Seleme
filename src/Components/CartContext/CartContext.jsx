import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const myCartContext = createContext(null);

export default function CartProvider({ children }) {

    const {cart, SetCart} = useState([])

function addItem(item, cantidad){
    cart.push(...item, cantidad)


}

function removeItem(itemID){

}

function clear(){

}

function isInCart(id){

}

    return (
        <>
            <myCartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
                {children}
            </myCartContext.Provider>
        </>
    )
}
