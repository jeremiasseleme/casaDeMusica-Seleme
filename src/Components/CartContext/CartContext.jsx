import React from 'react'
import { createContext } from 'react'

export const CartContext = createContext(null);

export default function CartContext({ children }) {

function addItem(item,cantidad){

}

function removeItem(itemID){

}

function clear(){

}

function isInCart(id){

}

    return (
        <>
            <CartContext.Provider value={{addItem, removeItem, clear, isInCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}
