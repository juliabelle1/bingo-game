import { boards } from "../data";
import { BoardItem } from "./BoardItem";

export const BoardComponent = ({ winArray }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mx-10">
        {boards?.map((item, index) => {
          return <BoardItem key={index} item={item} winArray={winArray} />;
        })}
      </div>
    </>
  );
};
