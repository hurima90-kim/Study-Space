import React, { useContext } from "react";
import "./Cart.scss";
import CartContext from "../context/cart/CartContext";
import formatCurreny from "format-currency";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItem, showHideCart } = useContext(CartContext);
  let options = { format: "%s%v", symbol: "$" };

  return (
    <div>
      {showCart && (
        <div className="cart_wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart_innerWrapper">
            {cartItem.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItem.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="cart_total">
            <div>Total Price</div>
            <div style={{ marginLeft: "5" }}>
              {formatCurreny(
                cartItem.reduce((amount, item) => item.price + amount, 0),
                options
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
