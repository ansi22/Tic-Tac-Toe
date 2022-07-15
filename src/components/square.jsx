import React from "react";

const Square = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>{props.value}</h5>
    </button>
  );
};

export default Square;
