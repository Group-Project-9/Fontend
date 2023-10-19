import React from "react";

const DateTime = ({ date, time, setDate, setTime }) => {
  return (
    <div className="Box flex items-center justify-between  text-black w-[400px] h-14 border rounded-xl">
      <h2 className="text-black flex ml-[10px] font-semibold">Start</h2>
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
