import React from 'react';
import '../assets/css/Modal.css'

const Modal = ({ show, onClose, nombre, precio, imagen, categoria, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10 }) => {
    return (
        <div
            className={`modal fade ${show ? 'show' : ''}`}
            tabIndex="-1"
            style={{ display: show ? 'block' : 'none' }}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{nombre}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body p-0 d-flex flex-column flex-sm-row p-3">
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                            <img src={imagen} alt={nombre} className="img-fluid rounded shadow" />
                        </div>
                        <div className='modal-info col-lg-6 col-sm-12 p-2 d-flex flex-column justify-content-center align-items-center'>
                            <p className='plate'>
                                <strong>Plato:</strong> {nombre}
                            </p>
                            <p className='price'>
                                <strong>Precio:</strong> ${precio}
                            </p>
                            <p className='price'>
                                <strong>Categoría:</strong> {categoria}
                            </p>
                            <p className='price'>
                                <strong>Ingredientes:</strong>
                            </p>
                            <ul className='price'> 
                                {strIngredient1 && <li>{strIngredient1}</li>} 
                                {strIngredient2 && <li>{strIngredient2}</li>} 
                                {strIngredient3 && <li>{strIngredient3}</li>} 
                                {strIngredient4 && <li>{strIngredient4}</li>} 
                                {strIngredient5 && <li>{strIngredient5}</li>} 
                                {strIngredient6 && <li>{strIngredient6}</li>} 
                                {strIngredient7 && <li>{strIngredient7}</li>} 
                                {strIngredient8 && <li>{strIngredient8}</li>} 
                                {strIngredient9 && <li>{strIngredient9}</li>} 
                                {strIngredient10 && <li>{strIngredient10}</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
