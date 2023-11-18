import React, { useState } from 'react'
import { Button, Text, ButtonGroup } from '@chakra-ui/react';
import { useCart } from '../CartContext/CartContext'; 
import Swal from 'sweetalert2';

const ItemCount = ({ product }) => {
    const [contador, setContador] = useState(0);
    const { addToCart } = useCart();

    const handleIncrement = () => {
        if (contador < 10) {
        setContador(contador + 1);
        } else {
        alert('La cantidad máxima es 10. No puedes agregar más.');
        }
    };

    const handleDecrement = () => {
        if (contador > 1) {
        setContador(contador - 1);
        } else {
        alert('La cantidad mínima es 1.');
        }
    };


    const addToCartHandler = () => {
        // Agrega el producto al carrito con la cantidad seleccionada
        addToCart(product, contador);
        Swal.fire({
            title: 'Agregado al carrito',
            text: `Producto: ${product.prodNombre}\nCantidad: ${contador}`,
            icon: 'success',
            confirmButtonText: 'Ok',
        });
    };
    

    

    return (
        <div>
            <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleDecrement}>
                    Menos
                </Button>
                <Text>{contador}</Text>
                <Button variant='solid' colorScheme='blue' onClick={handleIncrement}>
                    Más
                </Button>
                <Button onClick={addToCartHandler} >Add to cart</Button>
            </ButtonGroup>
            
        </div>
    )
}

export default ItemCount