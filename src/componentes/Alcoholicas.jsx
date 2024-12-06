import React, { useEffect, useState } from 'react';
import Card from './Card';
import Alcoholic from './js/apiAlcoholic';
import { useCart } from '../context/CartContext';

const Alcoholicas = () => {
    const [drinkDetails, setDrinkDetails] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchData() {
            try {
                const initialData = Alcoholic;

                const details = await Promise.all(
                    initialData.map(async (drink) => {
                        try {
                            const response = await fetch(
                                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
                            );
                            const data = await response.json();

                            return {
                                ...drink,
                                strCategory: data.drinks[0]?.strCategory,
                                ...data.drinks[0],
                            };
                        } catch (error) {
                            console.error(`Error fetching details for ${drink.idDrink}:`, error);
                            return drink;
                        }
                    })
                );

                setDrinkDetails(details);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        fetchData();
    }, []);

    const handleAddToCart = (item) => {
        const productoParaCarrito = {
            id: item.idDrink,
            nombre: item.strDrink,
            descripcion: item.strCategory || 'Bebida Alcohólica',
            precio: 10.90, // Puedes ajustar el precio según necesites
            imagen: item.strDrinkThumb
        };
        addToCart(productoParaCarrito);
    };

    return (
        <div className="container">
            <div className="row">
                {drinkDetails.map((item) => (
                    <div className="col-md-4 col-sm-12" key={item.idDrink}>
                        <Card
                            title={item.strDrink}
                            image={item.strDrinkThumb}
                            category={item.strCategory || 'Bebida Alcohólica'}
                            strIngredient1={item.strIngredient1}
                            strIngredient2={item.strIngredient2}
                            strIngredient3={item.strIngredient3}
                            strIngredient4={item.strIngredient4}
                            strIngredient5={item.strIngredient5}
                            strIngredient6={item.strIngredient6}
                            strIngredient7={item.strIngredient7}
                            strIngredient8={item.strIngredient8}
                            strIngredient9={item.strIngredient9}
                            strIngredient10={item.strIngredient10}
                        >
                            <button
                                className="addToCartBtn btn btn-primary"
                                onClick={() => handleAddToCart(item)}
                            >
                                Agregar al carrito
                            </button>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alcoholicas;
