import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export default function ItemDetailContainer() {


  const [instrumento, setInstrumento] = useState({})
  let { instrumentoID } = useParams()

  useEffect(() => {

const db = getFirestore();
const instrumentoRef = doc(db, "Instrumentos", instrumentoID)
getDoc(instrumentoRef).then((res)=>{
  const item = {...res.data(), id:res.id}
  setInstrumento(item)
})
}, [instrumentoID])

  return (
    <>
      {<ItemDetail instrumento={instrumento} />}
    </>
  )
}

