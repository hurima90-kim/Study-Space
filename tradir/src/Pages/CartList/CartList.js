import React from "react";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/Button/Button";
import styled from "styled-components";

const CartList = () => {
  return (
    <>
      <Button link="/beerlist" text="맥주 리스트 보기" />
      <Title>장바구니 리스트</Title>
      <CartItem />
    </>
  );
};

export default CartList;

const Title = styled.h1`
  font-size: 30px;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;
