import React, { useState } from "react";
import Square from "./square";

function Canvas(props) {
  console.log(props);
  const [square, setSquare] = useState(Array(9).fill(null));
  const [playerAcheck, setPlayerAcheck] = useState(true);

  function checkWinner() {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        square[a] !== null &&
        square[a] === square[b] &&
        square[b] == square[c]
      ) {
        return square[a];
      }
    }

    if (square.includes(null) === false) {
      return "Draw!";
    }
    return false;
  }
  const isWin = checkWinner();
  const handleClick = (i) => {
    if (square[i] !== null) {
      return;
    }
    const copySquare = [...square];
    copySquare[i] = playerAcheck ? "X" : "Y";
    setSquare(copySquare);
    setPlayerAcheck(!playerAcheck);
  };

  const handleReset = () => {
    setSquare(Array(9).fill(null));
    window.location.reload();
  };

  return (
    <div className="board-container">
      {isWin ? (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={square[0]} />
            <Square onClick={() => handleClick(1)} value={square[1]} />
            <Square onClick={() => handleClick(2)} value={square[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={square[3]} />
            <Square onClick={() => handleClick(4)} value={square[4]} />
            <Square onClick={() => handleClick(5)} value={square[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={square[6]} />
            <Square onClick={() => handleClick(7)} value={square[7]} />
            <Square onClick={() => handleClick(8)} value={square[8]} />
          </div>
          <div className="move">
            {isWin == "Draw!" ? (
              <>Match Draw!</>
            ) : (
              <>
                {isWin == "X" ? props.x : props.y} wins the game!
                <button id="btn-1" onClick={handleReset}>
                  Play Again
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={square[0]} />
            <Square onClick={() => handleClick(1)} value={square[1]} />
            <Square onClick={() => handleClick(2)} value={square[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={square[3]} />
            <Square onClick={() => handleClick(4)} value={square[4]} />
            <Square onClick={() => handleClick(5)} value={square[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={square[6]} />
            <Square onClick={() => handleClick(7)} value={square[7]} />
            <Square onClick={() => handleClick(8)} value={square[8]} />
          </div>
          <div className="move">
            <h4>
              {playerAcheck ? props.x : props.y}'s turn, please take your move!
            </h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Canvas;
