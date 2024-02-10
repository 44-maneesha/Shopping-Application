import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./Cmponents/Layout/Header";
import "./App.css";
// import { Fragment } from "react";
import Meals from "./Cmponents/Meals/Meals";
import Cart from "./Cmponents/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCardHandler = () => {
    setCartIsShow(false);
  };
  return (
    // <div>
    <CartProvider>
      {/* // <Fragment> */}
      {cartIsShow && <Cart onClose={hideCardHandler} />}

      {/* <Cart /> */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      {/* </div> */}
      {/* </Fragment> */}
    </CartProvider>
  );
}

export default App;
