import axios from "axios";
import React from "react";

const BeerList = async () => {
  try {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  return <div></div>;
};

export default BeerList;
