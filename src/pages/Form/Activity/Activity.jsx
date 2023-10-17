import React from "react";

const Activity = ({ selectOptions, handleChange, activity, setActivity }) => {
  return (
    <div className="Box h-14 flex">
      <h2 className="w-[30%]">Activity Type</h2>
      <select
        value={selectOptions}
        onChange={(e) => {
          handleChange(e);
          setActivity(e.target.value);
        }}
        className="Right mr-2 lg:w-3/5 md:w-1/2 text-black font-bold"
      >
        <option value="1" hidden disabled defaultValue>
          Select Activity
        </option>
        <option value="running">Running</option>
        <option value="Arobic">Aerobic</option>
        <option value="yoga">Yoga</option>
        <option value="weight">Weight Training</option>
        <option value="bicycle">Bicycle</option>
      </select>
    </div>
  );
};

export default Activity;