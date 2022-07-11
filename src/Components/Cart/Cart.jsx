import React from 'react'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import { useContext } from 'react';


export default function Cart() {

    const { cart } = useContext(myCartContext);

    
        if(cart.length = 0){
        return (
            <>
        <h1>Anda a comprar forro</h1>
        <Link to="/"><button>Volver a comprar</button></Link>
        </>
        )
    }
       return (
        cart.map((item) =>  <ItemCart item={item} /> )
        )
       }