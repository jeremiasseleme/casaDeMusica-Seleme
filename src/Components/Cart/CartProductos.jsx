//@ts-check
import React, { useContext } from 'react'
import ItemCart from './ItemCart';
import { myCartContext } from '../../Contexts/CartContext/CartContext';

export default function CartProductos() {
    
    const { cart } = useContext(myCartContext);

    
    const myCart = cart.map( (item) => {

        return (<ItemCart item={item} key={item.id} />)
    })

    return (
        { myCart }
    )
}
