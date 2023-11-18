import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault() 

        addDoc(ordersCollection, order).then(({id})=> {
            setOrderId(id),
            Swal.fire({
                title: '¡Orden enviada!',
                text: `Nombre: ${nombre}\nNúmero de orden: ${id}`,
                icon: 'success',
                confirmButtonText: 'Ok',
            }).then(() => {
                // borra la info de los campos
                setNombre('');
                setEmail('');
                window.location.href = '/'; //vuelve al inicio
            });
        })
    }
    console.log(orderId)

    const order = {
        nombre, 
        email
    }

    const ordersCollection = collection(db, "Orden")


    return (
        <div>
            <h1>Form de compra</h1>
            <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' onChange={(e)=> setNombre(e.target.value)} />
            <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />

            <button type="submit"> Enviar </button>
        </form>

        <p> Numero de orden: {orderId} </p>
        
        </div>
        
    )
}

export default Form