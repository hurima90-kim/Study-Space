import React from "react";
import Button from "../../Components/Button/Button";
import { style } from "./HomeStyle";

const Home = () => {
  return (
    <MainContainer>
      <MainTitle>
        Discover a Better Way to Manage
        <br />
        Global Trade
      </MainTitle>
      <MainDesc>
        트레이더는 무역 및 수출 관리에 특화된 CRM 및 협업 솔루션 입니다.
        <br />
        불필요한 수기 업무에서 벗어나 중요한 영업 활동에 집중하세요.
      </MainDesc>
      <Button />
    </MainContainer>
  );
};

export default Home;

const { MainContainer, MainTitle, MainDesc } = style;
