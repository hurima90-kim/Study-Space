import React from "react";
import { useSelector } from "react-redux";
import { style } from "./ModalStyle";

const Modal = ({ item, closeModal }) => {
  const beerList = useSelector((state) => state.columnsReducer.beerList);
  console.log(item);

  return (
    <ModalBackground>
      <ModalContainer>
        <Button onClick={() => closeModal(false)}> X </Button>
        <Title>
          <h1>{beerList[0].name}</h1>
          <p>{beerList[0].tagline}</p>
        </Title>
        <Body>
          <img src={beerList[0].image_url} alt="img" />
          <h3>Description</h3>
          <p>{beerList[0].description}</p>
          <p>First Brewed: {beerList[0].first_brewed}</p>
          <p>Abv: {beerList[0].abv}</p>
          <p>ph: {beerList[0].ph}</p>
        </Body>
        <Footer>
          <button onClick={() => closeModal(false)}>Cancel</button>
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

const { ModalBackground, ModalContainer, Button, Title, Body, Footer } = style;
