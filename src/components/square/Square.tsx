import React from "react";
import "./Square.css";

type SquareProps = {
  onClick?: (() => void) | undefined;
  value: string | null;
};

function Square(props: SquareProps) {
  return (
    <div>
      <button
        className="square"
        onClick={props.onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <>
          <h5>{props.value}</h5>
        </>
      </button>
    </div>
  );
}

export default Square;
