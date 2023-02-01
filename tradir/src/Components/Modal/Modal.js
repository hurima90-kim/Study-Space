import React from "react";
import { useDispatch } from "react-redux";
import { style } from "./ModalStyle";
import { closeModal } from "../../Modules/Actions/Actions";
import Button from "../../Components/Button/Button";

const Modal = (data) => {
  const dispatch = useDispatch();

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={() => dispatch(closeModal())}> X </CloseButton>
        <Title>
          <h1>{data.data.name}</h1>
          <p>{data.data.tagline}</p>
        </Title>
        <Body>
          <ImgContainer>
            <img src={data.data.image_url} alt="img" />
          </ImgContainer>
          <h3>Description</h3>
          <p>{data.data.description}</p>
          <p>First Brewed: {data.data.first_brewed}</p>
          <p>Abv: {data.data.abv}</p>
          <p>ph: {data.data.ph}</p>
        </Body>
        <Footer>
          <Button text="Cancel" onClick={() => dispatch(closeModal())} />
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const {
  ModalBackground,
  ModalContainer,
  CloseButton,
  Title,
  Body,
  ImgContainer,
  Footer,
} = style;
