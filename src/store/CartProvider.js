import { useReducer } from "react";
import Cartcontext from "./cart-context";
// -------------------------------------------------------

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// -------------------------------------------------------

// -------------------------------------------------------
const cartReducer = (state, action) => {
  console.log(action.item.price)
  if (action.type === "ADD_TO_CART") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmout: newTotalAmount,
    };
  }
  return defaultCartState;
};

// -------------------------------------------------------

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_TO_CART", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_FROM_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    
  };
  
  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
