import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import App from "./App";
import CartProvider from "./context/cart/CartProvider";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
