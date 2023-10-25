import React from 'react'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

    const productos = [
        {id: "1", name: "sahumerio calendula", descripcion: "descripcion producto A ", stock: 10, price: 1500 },
        {id: "2", name: "producto b ", descripcion: "descripcion producto B ", stock: 20, price: 1500 },
        {id: "3", name: "producto c ", descripcion: "descripcion producto C  ", stock: 30, price: 1500},
        {id: "4", name: "producto d", descripcion: "descripcion producto D", stock: 40, price: 1500 },
    ]

    const mostrarProductos = new Promise ((resolve, reject) =>{
        if(productos.length > 0 ){
            setTimeout (()=> {
                resolve(productos)
            },3000)
        } else {
            reject("No se encontraron productos")
        }
    })

    mostrarProductos
        .then((resultado)=>{
            console.log(resultado)
        })
        .catch((error)=> {
            console.log(error)
        })
    return (
        <>
            <ItemDetail
                productos={productos}  
            />

        </>
    )
}

export default ItemDetailContainer