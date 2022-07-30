import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Slider from '../Slider/Slider'


export default function ItemListContainer() {

  const [listaProductos, setListaProductos] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda]= useState()
  const { categoryID } = useParams()

  
  
  useEffect(() => {
    
    const db = getFirestore();
    const instrumentosRef = collection(db, "Instrumentos")
    
    if (!categoryID) {
      getDocs(instrumentosRef).then((res) => {
        setListaProductos(res.docs.map((item) => ({ ...item.data(), id: item.id })))
        setProductos(res.docs.map((item) => ({ ...item.data(), id: item.id })))
      })
    } else {
      const instrumentosQuery = query(collection(db, "Instrumentos"), where("category", "==", categoryID))
      getDocs(instrumentosQuery).then((res) => {
        setListaProductos(res.docs.map((item) => ({ ...item.data(), id: item.id })))
      })
    }
    setLoading(false)
    
  }, [categoryID])

  const filtrar=(terminoBusqueda)=>{
    const resultadosBusqueda = productos.filter((elemento)=>{
      if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento
      }
    });
    setListaProductos(resultadosBusqueda);
  }
  
  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  return (
    <>
    <div>
      <Slider/>
      <input onChange={handleChange} className="busqueda d-flex justify-content-center m-3 fs-6 p-3 mx-auto w-50 rounded" type="text" name="buscador" id="buscador" placeholder="Buscar por nombre"/>
      </div>
      {loading ? <img className="loading mt-3" src="https://media0.giphy.com/media/2qRdYsZ3QySKDN5PiE/giphy.gif?cid=790b7611a86763909b59bdee395ad001e067150e46a278a1&rid=giphy.gif&ct=g://c.tenor.com/KEzW7ALwfUAAAAAC/cat-what.gif" alt="Gato loading" /> : <ItemList listaProductos={listaProductos} />}
    </>
  )
}
