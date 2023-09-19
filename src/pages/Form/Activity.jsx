import React from "react";

const Activity = ({ selectOptions, handleChange }) => {
  return (
    <div className="Box h-14 flex">
      <h2 className="w-[30%]">Activity Type</h2>
      <select
        value={selectOptions}
        onChange={handleChange}
        className="Right mr-2 w-[40%]"
      >
        <option value="1" disabled defaultValue>
          Select Activity
        </option>
        <option value="running">Running</option>
        <option value="Arobic">Arobic</option>
        <option value="yoga">Yoga</option>
        <option value="weight">Weight Training</option>
        <option value="bicycle">Bicycle</option>
      </select>
    </div>
  );
};

export default Activity;
