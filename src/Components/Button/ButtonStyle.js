import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled(Link)`
  width: 170px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    262.38deg,
    rgb(51, 161, 185) -10.58%,
    rgb(90, 228, 161) 114.4%
  );
  border-radius: 5px;
  color: #fff;
`;

export const style = {
  Btn,
};
