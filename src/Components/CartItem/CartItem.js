import React from "react";
import { useDispatch } from "react-redux";

const CartItem = (data) => {
  console.log(data);
  const dispatch = useDispatch();

  return (
    // <div key={item.id}>
    //   <div>{item.name}</div>
    //   <div>{item.image_url}</div>
    // </div>
    <div></div>
  );
};

export default CartItem;
