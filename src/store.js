import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers } from 'redux';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import {thunk} from 'redux-thunk';

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;