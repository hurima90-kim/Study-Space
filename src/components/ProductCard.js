import React, { useContext } from "react";
import "./ProductCard.scss";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // 화폐 단위 설정을 위한  format-currency적용
  let options = { format: "%s%v", symbol: "$" };

  return (
    <div className="productCard_wrapper">
      <div>
        <img className="productCard_img" src={product.image} alt="images" />
        <h4>{product.name}</h4>
        <div className="productCard_price">
          <h5>{formatCurrency(`${product.price}`, options)}</h5>
        </div>
        <button
          className="productCard_button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
