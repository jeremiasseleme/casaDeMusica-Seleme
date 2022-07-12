import React, { useContext } from 'react';
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import CartProductos from './CartProductos';
import CartVacio from './CartVacio';


export default function Cart() {

    const { cart } = useContext(myCartContext);
    
    return (
        <>
            {cart.length < 1 ? <CartVacio/> : <CartProductos/> }
            </>
    )

}
