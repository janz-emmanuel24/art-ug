import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    // const clientSecret = await fetch(`/payments/create?total=${getBasketTotal(basket) * 100}`, {
    //   method: 'POST',
    //
    // })

    // ax({
    //     method: 'POST',
    //     // Stripe expects the total in a currencies subunits
    //     url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    // });
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setClientSecret(response.data.clientSecret);
          // console.log(response);
        }
        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>', clientSecret);
    console.log('👱', user);

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        // stripe.createPaymentMethod({db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            //   basket: basket,
            //   amount: paymentIntent.amount,
            //   created: paymentIntent
            // });
        //   type: 'card',
        //   card: elements.getElement(CardElement)
        // }
        // const payload = await stripe.createPaymentMethod({
        //   type: 'card',
        //   card: elements.getElement(CardElement)
        // }).then(({paymentIntent}) => {
        //
        //   db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent
        //   });
        //
        //   setSucceeded(true);
        //   setError(true);
        //   setProcessing(true);
        //
        //   dispatch({
        //     type: 'EMPTY_BASKET'
        //   });
        //
        //   history.replace('/orders');
        // });
        const payload = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: elements.getElement(CardElement)
          }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
            });


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
              type: 'EMPTY_BASKET'
            });

            history.replace('/orders');
        });

    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment container'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section row'>
                  <div className='payment__title col-4'>
                    <h3>Delivery Address</h3>
                  </div>
                  <div className='payment__address col-4'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                  </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section row'>
                    <div className='payment__title mr-2 col-sm-4'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items mt-2 mb-2'>
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

                {/* Payment section - Payment method */}
                <div className='payment__section row'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go */}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
