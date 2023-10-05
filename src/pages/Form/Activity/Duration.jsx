import React from "react";

const Duration = () => {
  return (
    <div className="flex Box h-14">
      <h2 className="">Duration</h2>
      <div className="Right mr-2 flex items-center ">
        <input className='text-black text-end bg-transparent font-semibold border-none outline-none'  type="number" placeholder="0" id="hours" name="hours" min="0" max="24" />
        <label className="text-black flex items-center font-semibold" for="hours">Hours</label>
        <input className='text-black text-end bg-transparent font-semibold border-none outline-none' type="number" placeholder="0" id="minutes" name="minutes" min="0" max="59" />
        <label className="text-black flex items-center font-semibold" for="minutes">Minutes</label>
      </div>
    </div>
  );
};

export default Duration;
