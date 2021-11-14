import React from "react";
import { useDispatch } from "react-redux";
import { style } from "./ModalStyle";
import { closeModal } from "../../Modules/Actions/Actions";

const Modal = (data) => {
  const dispatch = useDispatch();

  return (
    <ModalBackground>
      <ModalContainer>
        <Button onClick={() => dispatch(closeModal())}> X </Button>
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
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
          <button
            style={{
              border: "1px solid red",
              background: "none",
              color: "red",
            }}
          >
            Add Cart
          </button>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const {
  ModalBackground,
  ModalContainer,
  Button,
  Title,
  Body,
  ImgContainer,
  Footer,
} = style;
