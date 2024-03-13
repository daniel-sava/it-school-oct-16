import { products } from "../../data/products";
import Card from "../common/Card/Card";
import "./Products.css";

export default function Products() {
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
