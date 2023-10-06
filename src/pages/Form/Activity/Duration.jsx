import React from "react";

const Duration = ({ hour, minute , setHour, setMinute}) => {
  return (
    <div className="flex Box h-14">
      <h2 className="">Duration</h2>
      <div className="Right mr-2 flex items-center ">
        <input
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="text-black text-end bg-transparent font-semibold border-none outline-none"
          type="number"
          placeholder="0"
          id="hours"
          name="hours"
          min="0"
          max="24"
        />
        <label
          className="text-black flex items-center font-semibold"
          htmlFor="hours"
        >
          Hours
        </label>
        <input
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="text-black text-end bg-transparent font-semibold border-none outline-none"
          type="number"
          placeholder="0"
          id="minutes"
          name="minutes"
          min="0"
          max="59"
        />
        <label
          className="text-black flex items-center font-semibold"
          htmlFor="minutes"
        >
          Minutes
        </label>
      </div>
    </div>
  );
};

export default Duration;
