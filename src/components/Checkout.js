import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({subtotal}) {
  const dispatch = useDispatch()
  
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal))
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51OeM5WIqGhbicLQGYBzmrX5GZDdc3vKAi33fenZ2X4RiQdLVdsqEIKsZFGZwqD8fU4Mi6OexUE1cX7X1LFpVqsbB00d8lI2gen'
        currency='LKR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
