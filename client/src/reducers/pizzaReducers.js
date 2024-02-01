

export const getAllPizzasReducer=(state={pizzas : []},action)=>{
   switch(action.type)
   {
    case 'GET_PIZZAS_REQUEST' : return{
      loading : true,
      ...state
    }
    case 'GET_PIZZAS_SUCCESS' : return{
      loading : false,
      pizzas : action.payload
    }
    case 'GET_PIZZAS_FAILED' : return{
      error : action.payload,
      loading : false
    }
    default : return state
   }
}

export const getPizzaByIdReducer=(state={},action)=>{
  switch(action.type)
  {
   case 'GET_PIZZA_BY_ID_REQUEST' : return{
     loading : true,
     ...state
   }
   case 'GET_PIZZA_BY_ID_SUCCESS' : return{
     loading : false,
     pizza : action.payload
   }
   case 'GET_PIZZA_BY_ID_FAILED' : return{
     error : action.payload,
     loading : false
   }
   default : return state
  }
}

export const addPizzasReducer=(state={},action)=>{
   switch(action.type)
   {
    case 'ADD_PIZZA_REQUEST' : return{
      loading : true,
      ...state
    }
    case 'ADD_PIZZA_SUCCESS' : return{
      loading : false,
      success : true,
    }
    case 'ADD_PIZZA_FAILED' : return{
      error : action.payload,
      loading : false
    }
    default : return state
   }
}

export const updatePizzasReducer=(state={},action)=>{
  switch(action.type)
  {
   case 'UPDATE_PIZZA_REQUEST' : return{
     editloading : true,
     ...state
   }
   case 'UPDATE_PIZZA_SUCCESS' : return{
     editloading : false,
   }
   case 'UPDATE_PIZZA_FAILED' : return{
     editerror : action.payload,
     editloading : false,
     editsuccess : true,
   }
   default : return state
  }
}


