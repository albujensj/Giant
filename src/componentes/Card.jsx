import React, { useState } from 'react';
import '../assets/css/Card.css'
import Modal from './Modal';
const Card = ({ title, image, category, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10, children}) => {

//Estado para manejar el modal
const [isModalOpen, setModalOpen]=useState(false);

// Función para abrir y cerrar el modal
const handleOpenModal =()=>setModalOpen(true);
const handleCloseModal =()=>setModalOpen(false);

const Price= 10.90;

    return (
        <div className="card mt-5">
            <img src={image} alt={title} className="card-img-top"  style={{cursor:'pointer'}} onClick={handleOpenModal}
            />
            {/* Contenido de la Card */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><strong>Precio:</strong>${Price}</p>
            </div>

            {/* Contenido del MOdal */}
            {isModalOpen && (
                <Modal 
                show={isModalOpen}
                onClose={handleCloseModal}
                nombre={title}
                imagen={image}
                precio={Price}
                categoria={category}
                strIngredient1={strIngredient1} 
                strIngredient2={strIngredient2} 
                strIngredient3={strIngredient3} 
                strIngredient4={strIngredient4} 
                strIngredient5={strIngredient5} 
                strIngredient6={strIngredient6} 
                strIngredient7={strIngredient7} 
                strIngredient8={strIngredient8} 
                strIngredient9={strIngredient9} 
                strIngredient10={strIngredient10}
                />
            )}
            {children}
        </div>
    );
};

export default Card;