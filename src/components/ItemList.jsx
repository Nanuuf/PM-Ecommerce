import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos)
    return (
        <div>
            {
                productos.map((p) => {
                    return(
                        <Item
                            key={p.id}
                            id={p.id}
                            name= {p.name}
                            descripcion= {p.descripcion}
                            price= {p.price}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList