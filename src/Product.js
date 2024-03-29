import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id,title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispate the item into the dataLayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating
      }
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image}/>
      <button className="btn btn-md" onClick={addToBasket}> Add to basket </button>
    </div>
  );
}

export default Product;
