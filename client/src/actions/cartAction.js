export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  try {
    if (!pizza || !pizza._id || !pizza.name || !pizza.image || !pizza.prices) {
      throw new Error("Invalid pizza data");
    }

    if (!quantity || quantity < 1) {
      throw new Error("Invalid quantity");
    }

    if (!varient || !pizza.prices[0][varient]) {
      throw new Error("Invalid varient");
    }
    const price = pizza.prices[0][varient] * quantity;
    const cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: price,
    };
    if (cartItem.quantity > 10) {
      alert("You cannot add more than 10 quantities");
    } else {
      if(cartItem.quantity < 0){
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
      }
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error adding to cart:", error);
    dispatch({ type: "ADD_TO_CART_ERROR", payload: error.message });
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
 