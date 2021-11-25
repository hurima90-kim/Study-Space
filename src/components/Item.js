import React, { useState } from "react";
import "../styles/ListStyle.css";
import { ReactComponent as Group } from "../assets/group.svg";
import { ReactComponent as Open } from "../assets/fold.svg";
import { ReactComponent as Close } from "../assets/unfold.svg";

const Item = ({ item }) => {
  const [subMenu, setSubMenu] = useState(false);

  const showSubMenu = () => setSubMenu(!subMenu);

  const mapData = item.items.map((data) => (
    <ul className="dropdown" key={data.itemUid}>
      <li>{data.name}</li>
    </ul>
  ));

  return (
    <>
      <div
        className="list_container"
        onClick={item.groupUid !== null && showSubMenu}
      >
        <div className="list_items">
          <div className="fold_icon">
            {item.items.length !== 0 && item.groupUid !== null && !subMenu ? (
              <Close />
            ) : item.items.length !== 0 && item.groupUid !== null && subMenu ? (
              <Open />
            ) : null}
          </div>
          <div className="group_icon">
            {item.groupUid === null ? "" : <Group />}
          </div>
          <p>{item.name}</p>
        </div>
      </div>
      {subMenu
        ? mapData
        : item.groupUid === null
        ? item.items.map((data) => (
            <ul className="dropdown null" key={data.itemUid}>
              <li>{data.name}</li>
            </ul>
          ))
        : null}
    </>
  );
};

export default Item;
