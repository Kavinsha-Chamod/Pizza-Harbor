import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Make sure to import useDispatch from react-redux
import { getPizzaById, updatePizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

const Editpizza = () => {
  const { pizzaid } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza, error, loading } = getpizzabyidstate;
  const updatepizzasstate = useSelector((state)=>state.updatePizzasReducer)
  const { editsuccess, editerror, editloading } = updatepizzasstate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id == pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setImage(pizza.image);
        setCategory(pizza.category);
        setRegularPrice(pizza.prices[0]['Regular']);
        setMediumPrice(pizza.prices[0]['Medium']);
        setLargePrice(pizza.prices[0]['Large']);
      } else {
        dispatch(getPizzaById(pizzaid));
      }
    } else {
      dispatch(getPizzaById(pizzaid));
    }
  }, [pizza, dispatch, pizzaid]);

  function formHandler(e) {
    e.preventDefault();

    const updatedpizza = {
      _id: pizzaid,
      name,
      image,
      description,
      category,
      prices: { Regular: regularPrice, Medium: mediumPrice, Large: largePrice },
    };
    dispatch(updatePizza(updatedpizza))
  }

  return (
    <div>
      <h1>EDIT PIZZA</h1>
      <div className="text-right">
        <form onSubmit={formHandler}>
          {loading && (<Loading />)}
          {error && <Error error="Something went worng !" />}
          {editsuccess && (<Success success='Pizza details Edited !'/>)}
          {editloading && (<Loading />)}
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value.toUpperCase());
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={regularPrice}
            onChange={(e) => {
              setRegularPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largePrice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editpizza;

