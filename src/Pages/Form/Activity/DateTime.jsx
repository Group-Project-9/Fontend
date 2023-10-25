import React from "react";

const DateTime = ({ date, time, setDate, setTime }) => {
  return (
    <div className=" flex items-center justify-between xl:w-4/5 text-black w-full h-14 border-b-2 border-[#5C675F] rounded-xl">
      <h2 className="text-black flex ml-[10px] font-semibold">Start:</h2>
      <div className="flex h-full pr-1">
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="font-semibold bg-transparent text-end outline-none text-black w-full"
          type="date"
          required
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="font-semibold bg-transparent text-end outline-none text-black w-full"
          type="time"
          required
        />
      </div>
    </div>
  );
};

export default DateTime;
