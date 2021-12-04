import React, { useContext } from "react";
import "./Navbar.scss";
import CartContext from "../context/cart/CartContext";

const Navbar = () => {
  const { cartItem } = useContext(CartContext);

  return (
    <nav>
      <div className="nav_left">Store</div>
      <div className="nav_middle">
        <div className="input_wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav_right">
        <div className="cart_icon">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          {cartItem.length > 0 && (
            <div className="item_count">
              <span>{cartItem.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
