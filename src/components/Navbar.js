import React from "react";
import "./Navbar.scss";

const Navbar = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
