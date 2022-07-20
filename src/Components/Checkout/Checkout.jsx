import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import { Link } from "react-router-dom"

export default function Checkout() {

    const { cart, clear } = useContext(myCartContext);

    const [fname, setFname] = useState("")
    const [sname, setSname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")
    const [idCompra, setIdCompra] = useState()

    const mandarOrden = () => {

        const orden = {
            comprador: {nombre: fname, apellido: sname, email: email, telefono: phone, mensaje: msg},
            carrito: cart
    }


    const db = getFirestore()
    const collectionCompra = collection(db, "ordenesCompra")

    addDoc(collectionCompra, orden).then(({id}) => setIdCompra(id))
}


  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <form className="form-horizontal">
                    <fieldset>
                        <legend className="text-center header">Por favor complete sus datos</legend>

                        <div className="form-group">
                            <div className="col-md-12">
                                <input onChange={(e) => setFname(e.target.value)} aria-required id="fname" name="name" type="text" placeholder="Nombre" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <input onChange={(e) => setSname(e.target.value)} aria-required id="lname" name="name" type="text" placeholder="Apellido" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <input onChange={(e) => setEmail(e.target.value)} aria-required id="email" name="email" type="text" placeholder="Email" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <input onChange={(e) => setPhone(e.target.value)} aria-required id="phone" name="phone" type="text" placeholder="Telefono" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12">
                                <textarea onChange={(e) => setMsg(e.target.value)} className="form-control" aria-required id="message" name="message" placeholder="Ingrese su mensaje aqui, nos contactaremos con usted a la brevedad" rows="7"></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            {!idCompra &&
                            <div className="col-md-12 text-center">
                                <button onClick={()=> mandarOrden()} type="button" className="mt-5 btn btn-primary btn-lg">Terminar compra</button>
                            </div>
                            }
                            {idCompra &&
                            <>
                            <h3 className="mx-auto mt-5 text-center"> Su ID de compra es: {idCompra} </h3>
                            <h4 className="mx-auto mt-5 text-center">Nos contactaremos a la brevedad</h4>
                           <Link to="/"><button className="btn btn-primary mx-auto text-center" onClick={()=>clear()}>Volver a comprar</button></Link>
                            </>
                        }
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
