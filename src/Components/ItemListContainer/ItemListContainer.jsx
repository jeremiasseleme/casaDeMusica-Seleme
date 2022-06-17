//@ts-check
import React from 'react'
import "./ItemListContainer.css"

export default function ItemListContainer({greeting}) {
  return (
    <span className="itemListContainer">{greeting}</span> 
  )
}
