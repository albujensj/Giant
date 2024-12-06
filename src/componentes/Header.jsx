import React from 'react';
import '../assets/css/Header.css';
import img1 from '../assets/img/mexicana.jpg';
import img2 from '../assets/img/Italiana.jpg';
import img3 from '../assets/img/china.jpg';
import img4 from '../assets/img/alcohol.jpg';
import img5 from '../assets/img/sinAlcohol.jpg';

const Header = () => {
    return (
        <header className="header">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="imagen w-100" alt="First slide" />
                        <div className="carousel-caption">
                            <h5>Comida Mexicana</h5>
                            <p>Platillos llenos de sabor, tradición y un toque picante</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="imagen w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Comida Italiana</h5>
                            <p>Saborea las auténticas recetas mediterráneas de Italia</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="imagen w-100" alt="Third slide" />
                        <div className="carousel-caption">
                            <h5>Comida China</h5>
                            <p>Deliciosos platos con sabores exóticos y tradicionales de China</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="imagen w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Bebidas con Alcohol</h5>
                            <p>Una variedad de tragos y cócteles para cada ocasión</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="imagen w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <h5>Bebidas sin Alcohol</h5>
                            <p>Refrescantes bebidas para todos los gustos</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;