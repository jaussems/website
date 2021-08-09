import React from "react";
import "./menubutton.css";

function MenuButton(props) {
  return (
    <div className="btn-container" onClick={props.onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default MenuButton;
