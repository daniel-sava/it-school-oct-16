import { useEffect, useState } from "react";
import Card from "../common/Card/Card";
import "./Products.css";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((productsList) => {
                productsList = productsList.map((product) => {
                    return { ...product, quantity: Math.floor(Math.random() * 25) };
                });
                setProducts(productsList);
            });
    }, []);

    return (
        <div className="products">
            {products.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </div>
    );
}
