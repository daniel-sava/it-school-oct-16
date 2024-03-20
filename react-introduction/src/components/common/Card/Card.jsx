import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ name, price, image, quantity }) {
    const [quantityInStock, setQuantityInStock] = useState(quantity);
    const [hasTenPercentOff, setHasTenPercentOff] = useState(false);

    function buyProduct() {
        if (quantityInStock) {
            setQuantityInStock(quantityInStock - 1);
        }
    }

    function setProductOffer() {
        setHasTenPercentOff(true);
    }

    useEffect(() => {
        console.log("useEffect");

        return () => {
            // cod de cleanup
        };
    }, [quantityInStock, hasTenPercentOff]);

    return (
        <div className="product-card">
            <img className="product-image" src={image} />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">
                {price} {hasTenPercentOff ? " -10%" : ""}
            </p>
            <p className="product-stock">Stoc: {quantityInStock}</p>
            {quantityInStock ? (
                <>
                    <button className="product-button" onClick={buyProduct}>
                        Cumpara
                    </button>
                    <button className="product-offer" onClick={setProductOffer}>
                        Seteaza oferta
                    </button>
                </>
            ) : (
                <p>Indisponibil!</p>
            )}
        </div>
    );
}
