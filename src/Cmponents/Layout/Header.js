import { Fragment } from "react";
// import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import fileName from "../../assets/Home.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals and food on board</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/* <div> */}
        <img
          width={"100%"}
          height={"100%"}
          src={fileName}
          alt="A tabel full of delicious food"
        />
      </div>
    </Fragment>
  );
};
export default Header;
