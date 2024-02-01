import React from "react";
import { useSelector, useDispatch } from "react-redux";
import{addToCart} from '../actions/cartAction'
import {deleteFromCart} from '../actions/cartAction'
import Checkout from "../components/Checkout";
export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x , item)=> x+item.price, 0)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "30px" }}>MY CART</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text">
                  <h1>{item.name}</h1>
                  <h1>
                    Price : LKR.{item.prices[0][item.varient]} * {item.quantity}{" "}
                    ={item.price}
                  </h1>
                  <h1 style={{display:'inline'}}> Quantity : </h1>
                    <i className="fa fa-minus-circle" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                   
                  <b>{item.quantity}</b>
                  <i className="fa fa-plus-circle" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                
                     <h1>Selected Varient : {item.varient}</h1>
                </div>
                <div className="m-1 w-100">
                <img className="m-5" src={item.image} style={{height:'60px', width:'120px'}}/></div>
                <div className="m-1 w-100">
                <i className="fa fa-trash m-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
        <h2 style={{fontSize:'45px'}}>Sub Total : LKR.{subtotal}</h2>
        <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}
