import axios from 'axios'

export const placeOrder=(token, subtotal)=> async (dispatch, getState)=>{

  dispatch({type:'PLACE_ORDER_REQUEST'})
  const currentUser = getState().loginUserReducer.currentUser
  const cartItems = getState().cartReducer.cartItems
  try{
      const response = await axios.post('/api/orders/placeorder',{token,subtotal,currentUser,cartItems})
      dispatch({type:'PLACE_ORDER_SUCCESS'})
      console.log(response);
  }catch(error){
    dispatch({type:'PLACE_ORDER_FAILED'})
    console.log(error)
  }
}
export const getUserOrders = () => async (dispatch ,getState) => {

  const currentUser = getState().loginUserReducer.currentUser
  dispatch({ type: 'GET_USER_ORDERS_REQUEST' });

  try {
    const response = await axios.post('/api/orders/getuserorders',{userid: currentUser._id})
    console.log(response.data)
    dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload :  response.data });
  } catch(error) {
    dispatch({ type: 'GET_USER_ORDERS_FAILED', payload : error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: 'GET_ALL_ORDERS_REQUEST' });

  try {
    const response = await axios.post('/api/orders/getallorders');
    console.log(response.data);
    dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_ALL_ORDERS_FAILED', payload: error });
  }
};

export const deliverOrder = (orderid) => async dispatch=>{
  try {
    const response = await axios.post('/api/orders/deliverorder', {orderid})
    console.log(response);
    alert('Order Delivered !')
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
} 


