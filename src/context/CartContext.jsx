import { createContext, useState, useContext } from 'react';

// Creamos un contexto para el carrito de compras
const CartContext = createContext();

// CartProvider es un componente que envuelve la aplicación y proporciona el contexto del carrito
export function CartProvider({ children }) {
    // Estado para almacenar los items del carrito
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar items al carrito
    // Crea una copia del item y le agrega un id único usando Date.now()
    const addToCart = (item) => {
        setCartItems(prev => [...prev, { ...item, id: Date.now() }]);
    };

    // Función para eliminar items del carrito
    // Filtra el array removiendo el item con el id especificado
    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    // Función para calcular el total del carrito
    // Suma los precios de todos los items
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.precio, 0);
    };

    // Provee el contexto con los valores y funciones necesarias
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para usar el contexto del carrito fácilmente
export function useCart() {
    return useContext(CartContext);
} 