import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
    return (
        <div className="item-list-container" >
            {
                productos.map((p) => {
                    return(
                        <Item
                            key={p.id}
                            id={p.id}
                            prodNombre= {p.prodNombre}
                            detalle= {p.detalle}
                            precio= {p.precio}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList