import { useEffect, useState } from "react";

import ButtonPlayer from "./ButtonPlayer";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    let win = calculateWinner(squares);
    if (win || win === 0) {
      setFinish(true);
    }
  }, [squares]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const reset = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
    setFinish(false);
  };

  const winner = calculateWinner(squares);

  let status;
  if (winner === 0) {
    status = "Empate";
  } else if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Turno de: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col h-full justify-center content-center max-w-xs">
        <div className="mb-4 text-center font-bold text-2xl">{status}</div>
        <div className="text-3xl max-w-xs">
          <div className="flex">
            <ButtonPlayer
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
            />
            <ButtonPlayer
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
            />
            <ButtonPlayer
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="flex">
            <ButtonPlayer
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
            />
            <ButtonPlayer
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
            />
            <ButtonPlayer
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="flex">
            <ButtonPlayer
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
            />
            <ButtonPlayer
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
            />
            <ButtonPlayer
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
        {finish && (
          <button
            className="mb-4 text-center font-bold text-2xl"
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let checkEmpate = squares.filter((element) => element === null);
  if (checkEmpate.length === 0) {
    return 0;
  }

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
