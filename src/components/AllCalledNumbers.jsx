export const AllCalledNumbers = ({ winArray }) => {
  return (
    <div className="flex flex-col justify-center px-10 pb-4">
      <h3 className="pb-4 text-xl font-bold text-[#22668D]">All numbers:</h3>
      <div className="flex flex-wrap w-full">
        {winArray.map((item) => {
          return (
            <p
              className="flex justify-center items-center rounded-full w-10 h-10 bg-[#FFCC70] font-bold text-[#22668D] mr-2 mb-2"
              key={item}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
