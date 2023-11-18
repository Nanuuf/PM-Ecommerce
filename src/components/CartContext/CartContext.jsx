// CartContext.js
import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const item = { product, quantity };
        setCartItems([...cartItems, item]);
        console.log(`Producto agregado al carrito:`, product, `Cantidad:`, quantity);
    
    };

    const removeFromCart = (productId)=> {
        const updatedCart = cartItems.filter((item)=> item.product.id !== productId)
        setCartItems(updatedCart)
        console.log(`Producto eliminado del carrito:`, productId)
    }

    const clearCart = () => {
        setCartItems([]);
        console.log('Carrito limpiado');
    };
    
    const getTotalCantidad = () => {
        if (cartItems.length === 0) {
            return 0; // Si el carrito está vacío, devuelve 0
        }
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,cantidadTotal: getTotalCantidad() }}>
        {children}
        </CartContext.Provider>
    );
};

