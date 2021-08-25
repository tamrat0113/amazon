import React from 'react'
import "./CheckoutProducts.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
    return (
        <div className="checkoutProduct">
           <img className="checkoutProduct__image" src={image} />
           <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
                .fill()
                .map(() => (
                <p>🌟</p>
                ))}
                </div>
                {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
                )}{' '}
            </div>
        </div>
    )
}

export default CheckoutProduct;
