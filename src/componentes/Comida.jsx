import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Comida = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center mt-5">
                <h1 className="section-title">Comida</h1>
                <div className="menuC d-flex align-items-center justify-content-center gap-3">
                    <Link className="nav-link" to="Mexicana">Mexicana</Link>
                    <Link className="nav-link" to="Italiana">Italiana</Link>
                    <Link className="nav-link" to="China">China</Link>
                </div>
                {/* Renderiza el contenido del submenú */}
                <Outlet />
            </div>
        </>
    );
};

export default Comida;
