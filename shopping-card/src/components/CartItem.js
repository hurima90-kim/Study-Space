import React, { useContext } from "react";
import "./CartItem.scss";
import CartContext from "../context/cart/CartContext";
import formatCurreny from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let options = { format: "%s%v", symbol: "$" };

  return (
    <li className="cartItem">
      <img src={item.image} alt="product" />
      <div>
        {item.name} {formatCurreny(`${item.price}`, options)}
      </div>
      <button className="cartItem_button" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
