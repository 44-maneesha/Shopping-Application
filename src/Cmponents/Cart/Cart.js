import { useContext } from "react";
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import CartItems from "./CartItems";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => ( */}
      {cartCtx.items.map((item) => (
        // <li>{item.name}</li>
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    // <div>
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        {/* {" "} */}
        <span>Total Amount</span>
        {/* <span>35.62</span> */}
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
      {/* </div> */}
    </Modal>
  );
};

export default Cart;
