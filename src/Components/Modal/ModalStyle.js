import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 20px 25px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  background: none;
  border: none;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: underline;
  }

  p {
    margin-bottom: 15px;
    padding: 0 25px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 50px;
  margin: 0 auto;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    border: none;
    /* background: none; */
    width: 200px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      262.38deg,
      rgb(51, 161, 185) -10.58%,
      rgb(90, 228, 161) 114.4%
    );
    border-radius: 5px;
    color: #fff;
  }
`;

export const style = {
  ModalBackground,
  ModalContainer,
  CloseButton,
  Title,
  Body,
  ImgContainer,
  Footer,
};
