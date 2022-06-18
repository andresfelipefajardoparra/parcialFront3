import React from 'react'
import Item from './Item'
import data from './data.json';

export default function Listado({ agregarNum }) {

  return (
    <div className='container'>
      {
        data.map(producto =>
          <Item
            key={producto.id}
            nombre={producto.producto.nombre}
            descripcion={producto.producto.descripcion}
            stock={producto.stock}
            agregarNum={agregarNum} />
        )
      }
    </div>
  )
}
