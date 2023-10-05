// import "./App.css";
import { BoardComponent } from "./components/BoardComponent";
import { useState } from "react";
import { drawNumbers, boards } from "./data";
import { Navbar } from "./components/Navbar";

function App() {
  const [winArray, setWinArray] = useState([]);
  // const [message, setMessage] = useState(false);

  // All boards wich we going to use
  const allBoards = [];
  // Array to keep track of called bingo numbers
  const calledNumbers = [];
  // Index of winning Board
  let winningBoardIndex = 0;
  //How many times number was called
  let callsOfNumber = 0;
  const numBoards = boards.length; // You can change the number of boards as needed
  //Winning Board
  let lastBoard = [];
  //Winning Score
  let winningScore = 0;

  // Function to check if a bingo board has won
  function hasBingo(board) {
    // Check rows
    for (let i = 0; i < 5; i++) {
      if (board?.[i].every((num) => calledNumbers.includes(num))) {
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < 5; j++) {
      const column = [];
      for (let i = 0; i < 5; i++) {
        column.push(board?.[i][j]);
      }
      if (column.every((num) => calledNumbers.includes(num))) {
        return true;
      }
    }
    return false;
  }

  // Function to calculate the score of a bingo board
  function calculateBoardScore(lastBoard) {
    // console.log(lastBoard);
    let unmarkedSum = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const number = lastBoard[i][j];
        if (!calledNumbers.includes(number)) {
          unmarkedSum += number;
        }
      }
    }
    return (winningScore =
      unmarkedSum * calledNumbers[calledNumbers.length - 1]);
    // return winningScore;
  }

  // Function to simulate a bingo game
  function SimulateBingoGame() {
    // Generate bingo boards
    for (let i = 0; i < numBoards; i++) {
      allBoards.push(boards[i]);
    }

    // Check all bingo boards
    for (let i = 0; i < drawNumbers.length; i++) {
      if (allBoards.length >= 1) {
        callsOfNumber++;
        calledNumbers.push(drawNumbers[i]);
        for (let i = 0; i <= numBoards; i++) {
          if (hasBingo(allBoards[i])) {
            winningBoardIndex = i;
            allBoards.splice(winningBoardIndex, 1);
          }
        }
        if (allBoards.length === 1) {
          lastBoard = allBoards[0];
        }
      }
    }

    return calculateBoardScore(lastBoard);
  }

  SimulateBingoGame();
  console.log("Final Score:", winningScore);
  console.log("calledNumbers:", calledNumbers);
  console.log("lastBoard:", lastBoard);
  console.log("callsOfNumber:", callsOfNumber);

  function SendBoardScore() {
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Yuliia Zhmudyk", answer: winningScore }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1 className="text-4xl uppercase pt-10 font-bold text-center text-[#22668D]">
        Bingo
      </h1>
      <Navbar
        winArray={winArray}
        setWinArray={setWinArray}
        SendBoardScore={SendBoardScore}
      />
      <h3 className="text-center pb-6 text-[#22668D]">
        Final score:
        <span className="px-3 text-2xl tetx-bold">{winningScore}</span>
      </h3>
      <BoardComponent winArray={winArray} />
    </div>
  );
}

export default App;
