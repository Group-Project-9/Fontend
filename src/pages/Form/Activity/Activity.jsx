import React from "react";

const Activity = ({ selectOptions, handleChange, activity, setActivity }) => {
  return (
    <div className="flex items-center justify-between bg-[antiquewhite] text-black w-[400px] h-14 border rounded-xl">
      <h2 className="w-[30%] flex ml-[10px] text-black font-semibold">Activity Type</h2>
      <select
        value={selectOptions}
        onChange={(e) => {
          handleChange(e);
          setActivity(e.target.value);
        }}
        className="mr-2 lg:w-3/5 md:w-1/2 text-black font-bold h-full text-right bg-[antiquewhite] border-none outline-none"
      >
        <option className="text-black text-lg font-semibold" value="1" hidden disabled defaultValue required>
          Select Activity
        </option>
        <option className="text-black text-lg font-semibold" value="Running">Running</option>
        <option className="text-black text-lg font-semibold" value="Arobic">Aerobic</option>
        <option className="text-black text-lg font-semibold" value="Yoga">Yoga</option>
        <option className="text-black text-lg font-semibold" value="Weight Training">Weight Training</option>
        <option className="text-black text-lg font-semibold" value="Bicycle">Bicycle</option>
      </select>
    </div>
  );
};

export default Activity;
