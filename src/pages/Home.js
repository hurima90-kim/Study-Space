import React from "react";
import products from "../data";

const Home = () => {
  return <div>{products.map((product) => product.name)}</div>;
};

export default Home;
