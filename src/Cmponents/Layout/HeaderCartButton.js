import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-Context";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  console.log("updated context", cartCtx);
  //   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //     return curNumber + item.amount;
  //   }, 0);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    // <button className={classes.button} onClick={props.onClick}>
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      {/* <span className={classes.badge}>3</span> */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
