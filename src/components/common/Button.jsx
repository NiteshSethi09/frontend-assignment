import { memo } from "react";
import "../css/Button.css";
const Button = (props) => {
  return <button className={props.class}>{props.value}</button>;
};

export default memo(Button);
