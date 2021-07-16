import { memo } from "react";
import "../css/ContainerItem.css";
const ContainerItem = ({ value }) => {
  return (
    <div className="item item--1">
      <div className="icon-calendar"></div>
      <div className="content">
        <h3>{value}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default memo(ContainerItem);
