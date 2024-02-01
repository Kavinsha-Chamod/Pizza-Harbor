import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { getAllPizzasReducer, addPizzasReducer, getPizzaByIdReducer, updatePizzasReducer } from "./reducers/pizzaReducers";
import { thunk } from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from "./reducers/userReducer";
import { placeOrderReducer,getUserOrdersReducer, orderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzasReducer: addPizzasReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzasReducer: updatePizzasReducer,
  getAllUsersReducer: getAllUsersReducer,
  orderReducer: orderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  cartReducer: { cartItems: cartItems },
  loginUserReducer: { currentUser: currentUser },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;