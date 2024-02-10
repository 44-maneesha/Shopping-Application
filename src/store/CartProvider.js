import { useReducer } from "react";
import React from "react";
import CardContext from "./Cart-Context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //   updatedItems={...action.items};
      //   const updatedItems = state.items.concat(action.item);
      updatedItems = state.items.concat(action.item);
    }
    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const CartContext = {
    // items: [],
    items: cartState.items,

    // totalAmount: 0,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CardContext.Provider value={CartContext}>
      {/* {" "} */}
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
