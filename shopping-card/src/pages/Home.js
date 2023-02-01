import React from "react";
import "./Home.scss";
import products from "../data";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="products_wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
