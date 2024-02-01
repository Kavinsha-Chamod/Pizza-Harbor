import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import { clearCart } from '../actions/cartAction';


export default function Checkout({subtotal}) {
  const dispatch = useDispatch()
  const orderstate = useSelector((state)=>state.placeOrderReducer)
  const {loading, error, success} = orderstate

  const clearcartstate = useSelector((state)=>state.cartReducer)
  const {cartItems} = clearcartstate
  
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal))
    .then(()=>{
      dispatch(clearCart())
    })
  }

  return (
    <div>
    {success && (<Success success='Your Order placed successfully !'/>)}
      {error && (<Error error='Something went wrong !'/>)}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51OeM5WIqGhbicLQGYBzmrX5GZDdc3vKAi33fenZ2X4RiQdLVdsqEIKsZFGZwqD8fU4Mi6OexUE1cX7X1LFpVqsbB00d8lI2gen'
        currency='LKR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
      {loading && (<Loading/>)}
    </div>
  );
}
