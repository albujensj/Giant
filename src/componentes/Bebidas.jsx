import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Bebidas = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
                <h1 className='section-title'>Bebidas</h1>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <Link className="nav-link" to="Alcoholicas">Con Alcohol</Link>
                    <Link className="nav-link" to="NoAlcoholicas">Sin Alcohol</Link>
                </div>

                {/* Renderizar el contenido del submenú de bebidas */}
                <Outlet />
            </div>
        </>
    )
}

export default Bebidas