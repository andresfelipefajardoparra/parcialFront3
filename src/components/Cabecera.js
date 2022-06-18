import React from 'react'
import "./Cabecera.css";

export default function Cabecera({ contador }) {

  return (
    <header>
      <h1> Carrito de compras </h1>
      <p className='titulito'> Cantidad de productos  <span>{contador}</span> </p>
    </header>
  )
}

