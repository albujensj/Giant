import React from 'react';
import '../assets/css/Footer.css';
const Footer = () => {
    return (
        <footer className="container-fluid text-light text-center mt-5">
            <div className="row">
                <div className="Contenedor-Frase  col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <h3 className='Frase'>Sé Global, <br /> Sé Nómada</h3>
                </div>
                <div className="Contenedor-Info col-lg-6 col-md-6 col-sm-12">
                    <h3 className='Contactanos-info'>Contáctanos</h3>
                    <p>Email: <span>123@example.com</span> </p>
                    <p>Phone: <span>(123) 456-7890</span></p>
                    <p>Dirección: <span>Calle 123, Colonia XYZ, Estado ABC</span></p>
                    <p>Horario de Atención: <span>Lunes a Viernes 9:00 AM - 5:00 PM</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;