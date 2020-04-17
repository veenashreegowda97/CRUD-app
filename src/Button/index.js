import React from "react";
import "./index.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className={
        props.disabled ? "button-wrapper disable_button" : "button-wrapper"
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default React.memo(Button);
