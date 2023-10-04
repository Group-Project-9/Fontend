import React from "react";

const Distance = ({ selectOption }) => { // Use selectOption as prop name
  return (
    <>
      {(selectOption === "running" || selectOption === "bicycle") && (
        <div className="flex Box h-14">
          <h2>Distance</h2>
          <div className="Right flex items-center">
            <input
              className="w-full bg-transparent text-end text-black font-semibold outline-none"
              placeholder="0"
              name="distance"
              min={0}
              type="number"
            />
            <label htmlFor="distance" className="mr-2 flex items-center text-black font-semibold">
              KM
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Distance;
