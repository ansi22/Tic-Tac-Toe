import React, { useEffect, useState } from "react";
import Canvas from "./canvas";

function User() {
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [val, setVal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(true);
  };

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
                onChange={(event) => {
                  setPlayerA(event.target.value);
                }}
                required
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
                onChange={(event) => {
                  setPlayerB(event.target.value);
                }}
                required
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
