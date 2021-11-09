import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 70px;
  margin-bottom: 20px;
`;

const MainDesc = styled.p`
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 50px;
`;

export const style = {
  MainContainer,
  MainTitle,
  MainDesc,
};
