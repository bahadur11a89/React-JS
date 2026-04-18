import React from "react";
import "./LudoBoard.css"; 
const LudoBoard = () => {

  const [moves, setMoves] = React.useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0
  });

  const updateBlue = () => {
    setMoves((prev) => ({
      ...prev,
      blue: prev.blue + 1
    }));
  };

  const updateYellow = () => {
    setMoves((prev) => ({
      ...prev,
      yellow: prev.yellow + 1
    }));
  };

  const updateGreen = () => {
    setMoves((prev) => ({
      ...prev,
      green: prev.green + 1
    }));
  };

  const updateRed = () => {
    setMoves((prev) => ({
      ...prev,
      red: prev.red + 1
    }));
  };

  return (
    <>
      <p>Game Begins!</p>

      <div className="board">

        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={updateYellow}
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={updateGreen}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={updateRed}
        >
          +1
        </button>

      </div>
    </>
  );
};

export default LudoBoard;