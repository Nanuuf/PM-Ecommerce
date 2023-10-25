import React from 'react'
import ItemList from './ItemList'
import productos from './Dataproductos'
import './ItemListC.css'


const ItemListContainer = ({category}) => {
    
    const filteredProductos = category
    ? productos.filter((producto) => producto.categoria === category)
    : productos;

    return (
        <div>
            <h1>Productos</h1>
            <ItemList productos={filteredProductos} />
        </div>
    );
};
    
export default ItemListContainer;