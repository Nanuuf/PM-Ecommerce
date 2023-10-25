import React from 'react'
import { useState, useEffect } from 'react'

const Componente = () => {

    const [mensaje, setMensaje]=useState("Mensaje inicial")
    const [contador, setContador]=useState(0)

    useEffect(()=> {
        console.log("me estoy ejecutando")
    },[contador])

    const suma = () => {
        if(contador < 10)
            setContador(contador +1)
    }



    return (
        <div>
            <p> {mensaje} </p>
            <button onClick={()=> setMensaje("Mensaje modificado")}>Cambiar mensaje</button>
            <p> {contador} </p>
            <button onClick={(suma )} >+</button>
        </div>
    )
}

export default Componente