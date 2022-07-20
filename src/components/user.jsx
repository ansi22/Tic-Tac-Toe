import React, { useState } from "react";
import Canvas from "./Canvas";

function User() {
  const [playerA, setPlayerA] = useState("X");
  const [playerB, setPlayerB] = useState("O");
  const [val, setVal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(true);
  };
  console.log(playerA);
  return (
    <div className="center">
      {val == false ? (
        <>
          <form onSubmit={handleSubmit}>
            <label className="input">
              Player A:
              <input
                type="text"
                name="name"
                id="in"
                placeholder="X"
                onChange={(event) => {
                  setPlayerA(event.target.value);
                }}
                autoFocus
              />
            </label>
            <br />

            <label className="input">
              Player B:
              <input
                type="text"
                name="name"
                id="in"
                placeholder="O"
                onChange={(event) => {
                  setPlayerB(event.target.value);
                }}
              />
            </label>
            <br />
            <input id="btn" type="submit" value="Play!!" />
          </form>
        </>
      ) : (
        <>
          <Canvas x={playerA} y={playerB} />
        </>
      )}
    </div>
  );
}

export default User;
