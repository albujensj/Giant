import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

export function Cart() {
    const { cartItems, removeFromCart, getTotal } = useCart();

    return (
        <div className={styles.cart}>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.imagen} alt={item.nombre} />
                            <div>
                                <h3>{item.nombre}</h3>
                                <p>${item.precio}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className={styles.total}>
                        <h3>Total: ${getTotal()}</h3>
                    </div>
                </>
            )}
        </div>
    );
} 