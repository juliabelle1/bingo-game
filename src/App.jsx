// import "./App.css";
import { BoardComponent } from "./components/BoardComponent";
import { useEffect, useState } from "react";
import { drawNumbers, boards } from "./data";
import { Navbar } from "./components/Navbar";
import { AllCalledNumbers } from "./components/AllCalledNumbers";

function App() {
  const [winArray, setWinArray] = useState([]);

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
  const isBingo = (board) => {
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
  };

  // Function to calculate the score of a bingo board
  const calculateBoardScore = (lastBoard) => {
    let unmarkedSum = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (!calledNumbers.includes(lastBoard[i][j])) {
          unmarkedSum += lastBoard[i][j];
        }
      }
    }
    return (winningScore =
      unmarkedSum * calledNumbers[calledNumbers.length - 1]);
  };

  // Function to simulate a bingo game
  const SimulateBingoGame = () => {
    // Create bingo boards array
    for (let i = 0; i < numBoards; i++) {
      allBoards.push(boards[i]);
    }

    // Check all bingo boards and delete every winning board from the array
    for (let i = 0; i < drawNumbers.length; i++) {
      if (allBoards.length >= 1) {
        callsOfNumber++;
        calledNumbers.push(drawNumbers[i]);
        for (let i = 0; i <= numBoards; i++) {
          if (isBingo(allBoards[i])) {
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
  };

  SimulateBingoGame();

  console.log("Final Score:", winningScore);
  console.log("calledNumbers:", calledNumbers);
  console.log("lastBoard:", lastBoard);
  console.log("callsOfNumber:", callsOfNumber);

  const SendBoardScore = () => {
    fetch("https://customer-api.krea.se/coding-tests/api/squid-game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: winningScore, name: "Yuliia Zhmudyk" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log({ answer: winningScore, name: "Yuliia Zhmudyk" });
  };

  return (
    <div>
      <Navbar
        winArray={winArray}
        setWinArray={setWinArray}
        SendBoardScore={SendBoardScore}
        winningScore={winningScore}
      />
      {winArray.length > 0 && <AllCalledNumbers winArray={winArray} />}
      <BoardComponent winArray={winArray} />
    </div>
  );
}

export default App;
