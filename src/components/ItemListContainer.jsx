import React from 'react'
import ItemList from './ItemList'
import './ItemListC.css'
import { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const db = getFirestore()
            const ItemsCollection = collection(db, "holistico")
            const snapshot = await getDocs(ItemsCollection)
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                
            const filteredProducts = category ? docs.filter((p) => p.categoria === category) : docs
                
            setProductos(filteredProducts)
        }
    
        getProducts()
    }, [category])


    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    );
};
    
export default ItemListContainer;