import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProduct] = useState(null)



    const getProduct = () => {
        const db = getFirestore();
        const dbProdById = doc(db, "holistico", `${id}`);
        getDoc(dbProdById)
            .then((response) => {
                setProduct({ id: response.id, ...response.data() });
                
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        getProduct();
    }, [id]);



    
    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer