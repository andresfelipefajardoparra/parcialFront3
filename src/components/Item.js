import React from "react";
import { useState } from "react";
import "./Item.css";

export default function Item({ nombre, descripcion, stock, agregarNum }) {
  const [subirStock, setSubirstock] = useState(stock);
  const bajarNum = () => {
    if (subirStock > 0) {
      setSubirstock(prevState => prevState - 1)
      agregarNum()
    }
    console.log(subirStock);
  }

  function disabled(button) {
    let enabled = true;
    if (button.value === "") {
      enabled = false;
    }
  }

  return (
    <div className='producto'>
      <h3> {nombre} </h3>
      <p>{descripcion}</p>
      <h5 >En stock {subirStock === 0 ? <span>agotado</span> : subirStock}</h5>
      <button onClick={() => { bajarNum() }} disabled={subirStock > 0 ? false : true} >{subirStock === 0 ? "SIN STOCK" : "COMPRAR"}</button>
    </div>
  )
}