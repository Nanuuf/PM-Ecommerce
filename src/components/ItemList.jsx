import React from 'react'
import Item from './Item'


const ItemList = ({ productos }) => {
    return (
        <div className="item-list-container" >
            {productos.map((p) => (
                <Item key={p.id} id={p.id} prodNombre={p.prodNombre} precio={p.precio} imagen={p.imagen} detalle={p.detalle} />
            ))}
        </div>
    )
}

export default ItemList