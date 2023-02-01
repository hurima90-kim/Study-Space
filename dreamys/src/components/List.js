import React from "react";
import "../styles/ListStyle.css";
import { ListData } from "../data/data";
import Item from "./Item";

const List = () => {
  return (
    <>
      <div className="list_wrap">
        {ListData.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default List;
