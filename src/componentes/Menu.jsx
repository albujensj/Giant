    import React from 'react'
    import { Link } from 'react-router-dom'
    import { useCart } from '../context/CartContext'
    import '../assets/css/Menu.css';

    export const Menu = () => {
        const { cartItems, removeFromCart, getTotal } = useCart();
        const [showCart, setShowCart] = React.useState(false);

        return (
            <>
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid menu">
                        <Link to="/" className="brand-name">Nómada</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav w-100 d-flex justify-content-end align-items-center">
                                <Link className="nav-link" to="/">Comida</Link>
                                <Link className="nav-link" to="/Bebidas">Bebidas</Link>
                                <div className="cart-icon">
                                    <button 
                                        className="btn-cart"
                                        onClick={() => setShowCart(!showCart)}
                                    >
                                        <i className="fas fa-shopping-cart" style={{ color: 'var(--secondary-color)' }}></i>
                                        {cartItems.length > 0 && (
                                            <span className="cart-count">{cartItems.length}</span>
                                        )}
                                    </button>
                                    {showCart && (
                                        <div className="cart-dropdown">
                                            <div className="cart-items">
                                                {cartItems.length === 0 ? (
                                                    <p>El carrito está vacío</p>
                                                ) : (
                                                    <>
                                                        {cartItems.map(item => (
                                                            <div key={item.id} className="cart-item">
                                                                <img src={item.imagen} alt={item.nombre} />
                                                                <div className="item-details">
                                                                    <h4>{item.nombre}</h4>
                                                                    <p>${item.precio}</p>
                                                                </div>
                                                                <button 
                                                                    className="btn btn-danger btn-sm"
                                                                    onClick={() => removeFromCart(item.id)}
                                                                >
                                                                    ×
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <div className="cart-total">
                                                            <strong>Total: ${getTotal()}</strong>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

    export default Menu;
