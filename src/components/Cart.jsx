import React from 'react'
import { Link } from 'react-router-dom';
import { Text, Button, VStack, Image, Flex } from '@chakra-ui/react';
import { useCart } from './CartContext/CartContext'




const Cart = () => {
    const {cartItems, removeFromCart, clearCart} = useCart()

    const handleRemove = (productId) => {
        removeFromCart(productId)
    }

    const handleClearCart = () => {
        clearCart()
    }



    return (
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (
                <div>
                    <p>El carrito está vacío</p>
                    <Link to="/">
                        <Button colorScheme="blue">Volver al inicio</Button>{' '}
                    </Link> {/* Botón para volver al inicio */}
                </div>
            ) : (
                <div className="Cart">
                    <Flex flexWrap="wrap" justifyContent="space-evenly" >
                        {cartItems.map((item) => (
                            <div key={item.product.id} style={{ display: 'inline-block',  alignContent: 'space-around', }} >
                                <VStack spacing={4}>
                                <Image boxSize='100px' src={item.product.imagen} alt={item.product.prodNombre} />
                                <Text>{item.product.prodNombre} - Cantidad: {item.quantity}</Text>
                                <Text>Precio unitario: ${item.product.precio}</Text>
                                <Button onClick={() => handleRemove(item.product.id)}>Eliminar</Button>
                                </VStack>
                            </div>
                        ))}
                    </Flex>
                    <Button onClick={handleClearCart}>Limpiar carrito</Button>
                    <Link to= '/Form' >
                        <Button colorScheme="green" mt={4}>
                            Finalizar compra {/* Botón para finalizar compra */}
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};


export default Cart