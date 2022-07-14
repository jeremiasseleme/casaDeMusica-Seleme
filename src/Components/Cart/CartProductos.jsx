//@ts-check
import React, { useContext } from 'react'
import ItemCart from './ItemCart';
import { myCartContext } from '../../Contexts/CartContext/CartContext';

export default function CartProductos() {
    
    const { cart } = useContext(myCartContext);
console.log("carrito", cart)
    
    const myCart = cart.map( (item,i) => <ItemCart item={item} key={item.id + i} />)
    
    return (
        <>
        { myCart }
        </>
        )
    }
        
