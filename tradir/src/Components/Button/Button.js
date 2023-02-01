import React from "react";
import { style } from "./ButtonStyle";

const Button = (props) => {
  return <Btn to={props.link}>{props.text}</Btn>;
};

export default Button;

const { Btn } = style;
