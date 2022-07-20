import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';

export default function Checkout() {

    const { cart } = useContext(myCartContext);

    const [fname, setFname] = useState("")
    const [sname, setSname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")

    const mandarOrden = () => {

        const orden = {
            comprador: {nombre: fname, apellido: sname, email: email, telefono: phone, mensaje: msg},
            carrito: cart
    }


    const db = getFirestore()
    const collectionCompra = collection(db, "ordenesCompra")

    addDoc(collectionCompra, orden).then(({id}) => alert("El id de su compra es: " + id)
    )
}


  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                        <legend class="text-center header">Contact us</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                                <input onChange={(e) => setFname(e.target.value)} id="fname" name="name" type="text" placeholder="Nombre" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-12">
                                <input onChange={(e) => setSname(e.target.value)} id="lname" name="name" type="text" placeholder="Apellido" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-12">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="text" placeholder="Email" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-12">
                                <input onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" type="text" placeholder="Telefono" class="form-control"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-12">
                                <textarea onChange={(e) => setMsg(e.target.value)} class="form-control" id="message" name="message" placeholder="Ingrese su mensaje aqui, nos contactaremos con usted a la brevedad" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button onClick={()=> mandarOrden()} type="button" class="btn btn-primary btn-lg">Terminar compra</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
