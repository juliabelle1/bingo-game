import { useState } from "react";
import { bingoArray } from "../data";

export const Navbar = ({
  winArray,
  setWinArray,
  SendBoardScore,
  winningScore,
}) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const GetRandom = (arr) => {
    if (arr.length) {
      setWinArray([...winArray, arr[0]]);
      setRandomNumber(arr[0]);
      return arr.splice(0, 1);
    }
  };
  return (
    <>
      <nav>
        <h1 className="text-4xl uppercase pt-10 font-bold text-center text-[#22668D] pb-4">
          Bingo
        </h1>
        <div className="flex flex-wrap justify-center items-center py-4">
          <button
            onClick={() => GetRandom(bingoArray)}
            className=" bg-[#FFCC70] font-semibold px-3 py-2 rounded-lg text-[#22668D] w-44 mb-3"
          >
            Generate number
          </button>
          <button
            className="border-2 border-[#8ECDDD] font-semibold text-[#22668D] ml-6 rounded-lg px-3 py-2 w-44 mb-3"
            onClick={() => setShowFinalScore(true)}
          >
            Show final score
          </button>
          <button
            onClick={SendBoardScore}
            className="bg-[#8ECDDD] font-semibold text-[#FFFADD] ml-6 rounded-lg px-3 py-2 w-44 mb-3"
          >
            Send final score
          </button>
        </div>
      </nav>
      <div>
        {randomNumber && (
          <div className="flex justify-center items-center pb-3">
            <h3 className="text-center font-semibold text-[#22668D] pr-3">
              Current number:
            </h3>
            <p className="text-xl text-[#22668D] font-semibold rounded-full bg-[#FFCC70] w-10 h-10 flex justify-center items-center">
              {randomNumber ? randomNumber : "<>"}
            </p>
          </div>
        )}
        {showFinalScore && (
          <h3 className="text-center font-semibold pb-6 text-[#22668D]">
            Final score:
            <span className="px-3 text-2xl font-semibold">{winningScore}</span>
          </h3>
        )}
      </div>
    </>
  );
};
