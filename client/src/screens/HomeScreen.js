import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

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
          <Loading/>
        ) : error ? (
          <Error error = "Something went wrong"/>
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
