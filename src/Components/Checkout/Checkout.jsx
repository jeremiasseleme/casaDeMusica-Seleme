import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from 'react'
import { myCartContext } from '../../Contexts/CartContext/CartContext';
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

export default function Checkout() {

  const { cart, clear } = useContext(myCartContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [fname, setFname] = useState("")
  const [sname, setSname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")
  const [idCompra, setIdCompra] = useState()

  const mandarOrden = () => {

    const orden = {
      comprador: { nombre: fname, apellido: sname, email: email, telefono: phone, mensaje: msg },
      carrito: cart
    }


    const db = getFirestore()
    const collectionCompra = collection(db, "ordenesCompra")

    addDoc(collectionCompra, orden).then(({ id }) => setIdCompra(id))
      .then(() => clear())
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="well well-sm">
            <form onSubmit={handleSubmit(() => mandarOrden())} className="form-horizontal">
              <legend className="text-center header">Por favor complete sus datos</legend>

              <input {...register("fname", {
                required: {
                  value: true,
                  message: "Este campo es requerido"
                }
              })} onChange={(e) => setFname(e.target.value)} id="fname" name="fname" type="text" placeholder="Nombre" className="form-control" />
              {errors.fname && <span className="text-danger">{errors.fname.message}</span>}
              <input {...register("sname", {
                required: {
                  value: true,
                  message: "Este campo es requerido"
                }
              })} onChange={(e) => setSname(e.target.value)} id="sname" name="sname" type="text" placeholder="Apellido" className="form-control" />
              {errors.sname && <span className="text-danger">{errors.sname.message}</span>}
              <input  {...register("email", {
                required: {
                  value: true,
                  message: "Este campo es requerido"
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El email no es valido"
                }
              })}
                onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="text" placeholder="ejemplo@gmail.com" className="form-control" />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}

              <input {...register("phone", {
                required: {
                  value: true,
                  message: "Este campo es requerido"
                },
                pattern: {
                  value: /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/,
                  message: "El telefono no es valido"
                }
              })}
                onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" type="text" placeholder="0114707839" className="form-control" />
              {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
              <textarea onChange={(e) => setMsg(e.target.value)} className="form-control" id="message" name="message" placeholder="Aclaraciones o comentarios" rows="5"></textarea>
              {!idCompra &&
                <input type="submit" className="mt-5 btn btn-primary btn-lg" />
              }
              {idCompra &&
                <>
                  <h3 className="mx-auto mt-5 text-center"> Su ID de compra es: {idCompra} </h3>
                  <h4 className="mx-auto mt-5 text-center">Nos contactaremos a la brevedad</h4>
                  <Link to="/"><button className="btn btn-primary mx-auto text-center">Volver a comprar</button></Link>
                </>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
