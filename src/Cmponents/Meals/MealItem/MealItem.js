import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/Cart-Context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    console.log("amount", amount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log("cartCtx", cartCtx);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
