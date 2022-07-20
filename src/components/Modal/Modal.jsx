import React, { useState } from "react";
import "./style.css";

export default function Modal(props) {
  const [active, setActive] = useState(true);
  function closeModal() {
    setActive(false);
  }
  return (
    <>
      {active ? (
        <>
          <div className="overlay">
            <div className="modal">
              {props.winner == "Draw!" ? (
                <>Oops, Match Draw!!</>
              ) : (
                <>yaayyyyyy!!!!! {props.winner} wins. 🥳🥳</>
              )}

              <br />
              <button id="bt" onClick={closeModal}>
                Go back!
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
