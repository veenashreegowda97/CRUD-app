import React from "react";
import "./index.css";

function input(props) {
  return (
    <input
      type="text"
      className="input-wrapper"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default React.memo(input);
