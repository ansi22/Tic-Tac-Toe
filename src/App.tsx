import React from "react";
import "./App.css";
import User from "./components/user/User";

function App() {
  const [click, setClick] = React.useState<boolean>(false);

  let audioClick = new Audio("/click.mp3");
  let audioBack = new Audio("/back.mp3");

  function back() {
    audioBack.play();
    audioBack.loop = true;
  }

  function handleClick() {
    setClick(true);
    audioClick.play();
  }

  return (
    <>
      {click ? (
        <>
          {back()}
          <User />
        </>
      ) : (
        <>
          <div className="App">
            <h1 id="title">Wanna play Tic-Tac-Toe?</h1>

            <button id="btn" onClick={handleClick}>
              Click Me!
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default App;
