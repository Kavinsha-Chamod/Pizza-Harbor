import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getAllPizzas, deletePizza } from '../actions/pizzaActions';
import { Link } from 'react-router-dom';

export default function PizzasList() {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>PIZZAS LIST</h2>
      
      <div className='ttable'>
      <table className='table table-border'>
      <thead className='thead-dark'>
      <tr>
      <th>Name</th>
      <th>Prices</th>
      <th>Category</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {pizzas && pizzas.map(pizza =>{
          return <tr>
          <td>{pizza.name}</td>
          <td>
             Regular - LKR.{pizza.prices[0]['Regular']}<br/>
             Medium - LKR.{pizza.prices[0]['Medium']}<br/>
             Large - LKR.{pizza.prices[0]['Large']}
          </td>
          <td>{pizza.category}</td>
          <td>
              <i className='fa fa-trash m-2' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
              <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-2'></i></Link>
          </td>
        </tr>   
      })}
      </tbody>
      </table>
     </div>
      {loading && (<Loading/>)}
      {error && (<Error error="Something went wrong !"/>)}
    </div>
  )
}
