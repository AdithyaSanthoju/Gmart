import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [message, setMessage] = useState('');

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setMessage(`Added ${item.name} to cart!`); // Assuming item has a 'name' property

        // Clear the message after 3 seconds
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, getTotalPrice, message }}>
            {children}
            {message && <div className="cart-message">{message}</div>} {/* Message display */}
        </CartContext.Provider>
    );
};
