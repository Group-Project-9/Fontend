import React from "react";

const DateTime = ({ date, time, setDate, setTime }) => {
  return (
    <div className="Box flex h-14">
      <h2>Start</h2>
      <div className="flex h-full pr-1">
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="font-semibold bg-transparent text-end outline-none text-black w-full"
          type="date"
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="font-semibold bg-transparent text-end outline-none text-black w-full"
          type="time"
        />
      </div>
    </div>
  );
};

export default DateTime;
