import React from "react";
import { style } from "./ButtonStyle";

const Button = () => {
  return <Btn to="/beerlist">맥주 목록 보기</Btn>;
};

export default Button;

const { Btn } = style;
