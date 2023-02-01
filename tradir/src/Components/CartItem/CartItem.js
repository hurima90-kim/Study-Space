import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.columnsReducer.cartList);
  console.log(cartList);

  return (
    <div key={cartList.id}>
      <div>{cartList.name}</div>
      <div>{cartList.image_url}</div>
    </div>
  );
};

export default CartItem;
