import { BoardRow } from "./BoardRow";

export const BoardItem = ({ item, winArray }) => {
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
