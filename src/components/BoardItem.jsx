// import { useEffect } from "react";
import { BoardRow } from "./BoardRow";
// import { useState } from "react";

export const BoardItem = ({ item, winArray }) => {
  // const colomnNumbers = [
  //   [item[0][0], item[1][0], item[2][0], item[3][0], item[4][0]],
  //   [item[0][1], item[1][1], item[2][1], item[3][1], item[4][1]],
  //   [item[0][2], item[1][2], item[2][2], item[3][2], item[4][2]],
  //   [item[0][3], item[1][3], item[2][3], item[3][3], item[4][3]],
  //   [item[0][4], item[1][4], item[2][4], item[3][4], item[4][4]],
  // ];

  // useEffect(() => {
  //   for (let i = 0; i < 5; i++) {
  //     if (
  //       newItem[i]?.every((element) => winArray.includes(element)) ||
  //       item[i]?.every((element) => winArray.includes(element))
  //     ) {
  //       setColor("bg-black");
  //     }
  //   }
  // }, [winArray]);

  return (
    <table>
      <tbody className="text-[#FFFADD] bg-[#22668D] font-semibold">
        <tr>
          <BoardRow rowNumbers={item[0]} winArray={winArray} />
        </tr>
        <tr>
          <BoardRow rowNumbers={item[1]} winArray={winArray} />
        </tr>
        <tr>
          <BoardRow rowNumbers={item[2]} winArray={winArray} />
        </tr>
        <tr>
          <BoardRow rowNumbers={item[3]} winArray={winArray} />
        </tr>
        <tr>
          <BoardRow rowNumbers={item[4]} winArray={winArray} />
        </tr>
      </tbody>
    </table>
  );
};
