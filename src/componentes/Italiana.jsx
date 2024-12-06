import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useCart } from '../context/CartContext';

const Italiana = () => {
    const [mealDetails, setMealDetails] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
            .then((response) => response.json())
            .then((data) => {
                const mealIds = data.meals.map(meal => meal.idMeal);
                return Promise.all(mealIds.map(id => 
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                        .then(response => response.json())
                        .then(data => data.meals[0])
                ));
            })
            .then(mealDetails => {
                setMealDetails(mealDetails);
            })
            .catch((error) => console.error('Error al obtener datos:', error));
    }, []);

    const handleAddToCart = (item) => {
        const productoParaCarrito = {
            id: item.idMeal,
            nombre: item.strMeal,
            descripcion: item.strCategory,
            precio: 10.90,
            imagen: item.strMealThumb
        };
        addToCart(productoParaCarrito);
    };

    return (
        <div className="container">
            <div className="row">
                {mealDetails?.map((item) => (
                    <div className="col-md-4 col-sm-12" key={item.idMeal}>
                        <Card
                            title={item.strMeal}
                            image={item.strMealThumb}
                            category={item.strCategory}
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
}

export default Italiana;
