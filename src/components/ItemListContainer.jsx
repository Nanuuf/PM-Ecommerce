import React from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'

import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    
    const { category } = useParams();

    const productos = [
        {id: "1", name: "spray romero", descripcion: "spray natural de romero ", category:"spray", stock: 10, price: 1500 },
        {id: "2", name: "spray haurico a ", descripcion: "spray natural ", category:"spray", stock: 20, price: 1500 },
        {id: "3", name: "sahumo lavanda ", descripcion: "sahumo natural de lavanda  ", category:"sahumos", stock: 30, price: 1500},
        {id: "4", name: "sahumo lavanda y rosas", descripcion: "sahumo natural de lavanda y rosas", category:"spray", stock: 40, price: 1500 },
    ]

    const filteredProductos = category ? productos.filter(producto => producto.category === category) : productos;

    return (
        <>
        <Center>
            <ItemList productos={filteredProductos} />
        </Center>
        </>
    );
};


export default ItemListContainer