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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    dispatch({type:"ADD_PIZZA_FAILED" , payload:error})
  }
}

export const updatePizza=(updatedpizza)=> async dispatch =>{

  dispatch({type: "UPDATE_PIZZA_REQUEST"})

  try {
    const response = await axios.post('/api/pizzas/editpizza',{updatedpizza})
    console.log(response)
    dispatch({type: "UPDATE_PIZZA_SUCCESS"})
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    dispatch({type:"UPDATE_PIZZA_FAILED" , payload:error})
    window.location.href="/admin/pizzaslist"
  }
}

export const deletePizza=(pizzaid)=> async dispatch=>{
  
  try {
    const confirmDelete = window.confirm('Are you sure you want to delete this pizza?');
    if (!confirmDelete) {
      return;
    }
    const response = await axios.post("/api/pizzas/deletepizza",{pizzaid})
    console.log(response)
    window.location.reload()
  } catch (error) {
    console.log(error)
    alert('Something went wrong !')
  }
}
