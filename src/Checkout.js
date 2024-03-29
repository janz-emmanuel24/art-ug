import React from 'react';
import "./Checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="container">
    <div className="checkout row">
      <div checkName="checkout__left col-md-6">
        <div>
          <h3>Hello, {user?.email}</h3>
          <div className="checkout__right d-flex justify-content-sm-end my-4 justify-content-md-end">
            <Subtotal/>
          </div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

    </div>
    </div>
  );
}

export default Checkout;
