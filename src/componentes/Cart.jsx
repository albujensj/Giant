// Importamos el hook useCart del contexto del carrito
import { useCart } from '../context/CartContext';
// Importamos los estilos CSS modulares para el carrito
import styles from '../styles/Cart.module.css';

// Definimos y exportamos el componente Cart
export function Cart() {
    // Extraemos las funciones y datos necesarios del contexto usando useCart
    const { cartItems, removeFromCart, getTotal } = useCart();

    return (
        // Contenedor principal del carrito con estilos CSS
        <div className={styles.cart}>
            <h2>Carrito de Compras</h2>
            {/* Operador ternario que verifica si el carrito está vacío */}
            {cartItems.length === 0 ? (
                // Si está vacío, muestra este mensaje
                <p>El carrito está vacío</p>
            ) : (
                // Si no está vacío, muestra los items
                <>
                    {/* Mapea cada item del carrito para mostrarlos */}
                    {cartItems.map(item => (
                        // Contenedor para cada item del carrito
                        <div key={item.id} className={styles.cartItem}>
                            {/* Imagen del producto */}
                            <img src={item.imagen} alt={item.nombre} />
                            {/* Contenedor para la información del producto */}
                            <div>
                                <h3>{item.nombre}</h3>
                                <p>${item.precio}</p>
                            </div>
                            {/* Botón para eliminar el item del carrito */}
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    {/* Sección que muestra el total de la compra */}
                    <div className={styles.total}>
                        <h3>Total: ${getTotal()}</h3>
                    </div>
                </>
            )}
        </div>
    );
} 