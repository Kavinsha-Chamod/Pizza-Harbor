import axios from "axios";

export const getAllPizzas = () => async dispatch => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' }); //calls the reducer

  try {
    const response = await axios.get('/api/pizzas/getallpizzas')
    console.log(response)
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload :  response.data });
  } catch(error) {
    dispatch({ type: 'GET_PIZZAS_FAILED', payload : error });
  }
};

export const getPizzaById = (pizzaid) => async dispatch => {
  dispatch({ type: 'GET_PIZZA_BY_ID_REQUEST' }); //calls the reducer

  try {
    const response = await axios.post('/api/pizzas/getpizzabyid',{pizzaid})
    console.log(response)
    dispatch({ type: 'GET_PIZZA_BY_ID_SUCCESS', payload :  response.data });
  } catch(error) {
    dispatch({ type: 'GET_PIZZA_BY_ID_FAILED', payload : error });
  }
};

export const addPizza=(pizza)=> async dispatch =>{

  dispatch({type: "ADD_PIZZA_REQUEST"})

  try {
    const response = await axios.post('/api/pizzas/addpizza', {pizza})
    console.log(response)
    dispatch({type: "ADD_PIZZA_SUCCESS"})
    
  } catch (error) {
    dispatch({type:"ADD_PIZZA_FAILED" , payload:error})
  }
}

export const updatePizza=(updatedpizza)=> async dispatch =>{

  dispatch({type: "UPDATE_PIZZA_REQUEST"})

  try {
    const response = await axios.post('/api/pizzas/editpizza', {updatedpizza})
    console.log(response)
    dispatch({type: "UPDATE_PIZZA_SUCCESS"})
    window.location.href="/admin/pizzaslist"
  } catch (error) {
    dispatch({type:"UPDATE_PIZZA_FAILED" , payload:error})
  }
}

export const deletePizza=(pizzaid)=> async dispatch=>{
  try {
    const response = await axios.post("/api/pizzas/deletepizza",{pizzaid})
    alert('Deleted !')
    console.log(response)
    window.location.reload()
  } catch (error) {
    alert('Something went wrong')
    console.log(error)
  }
}
