//@ts-check
import React from 'react'

export default function ItemListContainer({greeting}) {
  return (
    <span style={{backgroundColor: "red", border: "solid 1px black", padding: "5px", fontSize: "20px", textAlign: "center" }}>{greeting}</span>
    
  )
}
