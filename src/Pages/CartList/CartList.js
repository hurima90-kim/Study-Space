import React from "react";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/Button/Button";

const CartList = () => {
  return (
    <>
      <Button link="/beerlist" text="맥주 리스트 보기" />
      <CartItem />
    </>
  );
};

export default CartList;
