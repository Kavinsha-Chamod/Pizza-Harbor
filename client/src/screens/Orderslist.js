import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { deliverOrder, getAllOrders } from '../actions/orderActions';

export default function Orderslist() {

  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.orderReducer) 
  const {orders, error, loading} = orderstate;
  
  useEffect(()=>{
    dispatch(getAllOrders());
  },[])
  return (
    <div>
      <h2>ORDERS LIST</h2>
      
      <div className='ttable'>
      <table className='table table-border'>
      <thead>
      <tr>
      <th>Order Id</th>
      <th>Email</th>
      <th>User Id</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
      </tr>
      </thead>
      <tbody>
        {orders && orders.map(order=>{
          return <tr>
            <td>{order._id}</td>
            <td>{order.email}</td>
            <td>{order.userid}</td>
            <td>LKR.{order.orderAmount}</td>
            <td>{order.createdAt.substring(0,10)}</td>
            <td>
               {order.isDelivered ? (<h1>Delivered</h1>):
              (<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)
              }
            </td>
          </tr>
        })}
      </tbody>
      </table>
      </div>
      {loading && (<Loading/>)}
      {error && (<Error error="Something went wrong !"/>)}
    </div>
  );
}
