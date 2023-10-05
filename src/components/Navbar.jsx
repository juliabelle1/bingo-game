import { useState } from "react";
import { bingoArray } from "../data";

export const Navbar = ({ winArray, setWinArray, SendBoardScore }) => {
  const [randomNumber, setRandomNumber] = useState(null);

  const GetRandom = (arr) => {
    if (arr.length) {
      // const randomIndex = Math.floor(Math.random() * arr.length);
      setWinArray([...winArray, arr[0]]);
      setRandomNumber(arr[0]);

      // console.log("newArray", arr.splice(randomIndex, 1));
      // console.log("randomNumber", 0);
      // console.log("randomIndex", randomIndex);
      return arr.splice(0, 1);
    }
  };
  return (
    <>
      <nav className="flex justify-center items-center pt-6">
        <button
          onClick={() => GetRandom(bingoArray)}
          className="border bg-[#FFCC70] px-3 py-2 rounded-lg text-[#22668D] w-44"
        >
          Generate number
        </button>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#8ECDDD] text-[#FFFADD] ml-6 rounded-lg px-3 py-2 w-44"
            onClick={SendBoardScore}
          >
            Send final score
          </button>
        </div>
      </nav>
      <h3 className="text-center py-6 text-[#22668D]">
        Current number:
        <span className="px-3 text-2xl tetx-bold">
          {randomNumber ? randomNumber : "<>"}
        </span>
      </h3>
    </>
  );
};
