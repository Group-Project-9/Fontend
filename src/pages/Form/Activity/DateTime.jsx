import React from "react";

const DateTime = () => {
  return (
    <div className="Box flex h-14">
      <h2>Start</h2>
      <div className="flex h-full pr-1">
        <input className="font-semibold bg-transparent text-end outline-none text-black w-full" type="date" />
        <input className="font-semibold bg-transparent text-end outline-none text-black w-full" type="time" />
      </div>
    </div>
  );
};

export default DateTime;
