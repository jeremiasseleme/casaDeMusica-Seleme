import React from 'react'
import { useState, useEffect } from 'react';
import { createContext } from 'react'
import Toastify from 'toastify-js';

export const myCartContext = createContext();

export default function CartProvider({ children }) {

    const [cantidad, setCantidad] = useState(0)

    const [totalCompra, setTotalCompra] = useState(0)

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))

        setCantidad(cart.reduce((previous, current) => previous + current.cantidad, 0)
        );
        const total = cart.reduce((previous, current) => previous + current.cantidad * current.price, 0)
        setTotalCompra(total)
    }, [cart])


    function addItem(item, cantidadItems) {
     
    if(isInCart(item.id)){
            let nuevoCart = cart;
            let indexProducto = nuevoCart.findIndex(instrumento => instrumento.id === item.id);
            nuevoCart[indexProducto].cantidad = Number(nuevoCart[indexProducto].cantidad) + Number(cantidadItems);
            setCart([...nuevoCart]);
        }else {
            setCart([...cart, { ...item, cantidad: cantidadItems }],)
        }
    } 

function removeItem(itemID) {
    const removedItem = cart.find((instrumento) => instrumento.id === itemID)
    setCart(cart.filter((instrumento) => instrumento.id !== itemID),)
    // setCantidad(cantidad - removedItem.cantidad)
    Toastify({
        text: "Se elimino " + removedItem.title + " del carrito de compras!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "red",
        },
        onClick: function () { }
    }).showToast();
}

function clear() {
    setCart([],)
    // setCantidad(0)
    Toastify({
        text: "Usted ha vaciado su carrito de compras!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "red",
        },
        onClick: function () { }
    }).showToast();
}

function isInCart(id) {
    return cart.find(item => item.id === id)
}


return (
    <>
        <myCartContext.Provider value={{ cart, addItem, removeItem, clear, cantidad, totalCompra }}>
            {children}
        </myCartContext.Provider>
    </>
)
}
