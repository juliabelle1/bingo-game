export const BoardRow = ({ rowNumbers, winArray }) => {
  return (
    <>
      {rowNumbers.map((row) => {
        return (
          <td
            className={
              rowNumbers.every((element) => winArray.includes(element))
                ? "py-3 text-center w-10 bg-red-500"
                : "py-3 text-center w-10"
            }
            key={row}
          >
            <span
              className={
                winArray.includes(row)
                  ? "flex justify-center items-center mx-auto bg-[#FFCC70] text-[#22668D] rounded-full w-8 h-8 font-bold"
                  : ""
              }
            >
              {row}
            </span>
          </td>
        );
      })}
    </>
  );
};
