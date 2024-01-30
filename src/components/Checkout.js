import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({subTotal}) {
  const dispatch = useDispatch()
  
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subTotal))
  }

  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={{tokenHandler}}
        stripeKey='pk_test_51OeH0MSD4GchlaLGEEOMGZ4PMo5Kgx4f52rCJQeJxPFvyYKjiYD3BcUIN91FK57JEGoh32q8EGyj46J3RTKW508V00TZOx9W3W'
        currency='LKR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
