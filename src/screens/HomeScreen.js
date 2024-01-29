import React, { useEffect, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const pizzastate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div key={pizza._id} className="col-md-4 p-3">
                <div className="m-3">
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
