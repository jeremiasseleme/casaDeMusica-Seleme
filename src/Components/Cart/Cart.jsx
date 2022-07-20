import React, { useContext } from 'react';
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart';
import "./Cart.css"


export default function Cart() {

    const { cart, clear } = useContext(myCartContext);

    return (
        <>
            {cart.length < 1 ?
                <>
                    <div className="carroVacio">
                        <h1 className="p-5">Tu carrito de compras esta esta vacio</h1>
                        <Link to="/"><button className="p-3 mb-5 btn btn-primary">Volver a comprar!</button></Link>
                    </div>
                </>
                :
                <>
                    {cart.map((item, i) => <ItemCart item={item} key={item.id + i} />)}
                    <button className="mx-auto btn btn-primary" onClick={() => clear()}>Limpiar Carrito</button>
                    <Link to="/checkout"><button className="mx-auto btn btn-primary">Terminar compra</button></Link>
                </>
            }
        </>
    )

}
