import React from "react";

const Distance = ({ selectOption, distance, setDistance }) => { // Use selectOption as prop name
  return (
    <>
      {(selectOption === "Running" || selectOption === "Bicycle") && (
        <div className="Box flex items-center justify-between text-black w-[400px] h-14 border rounded-xl">
          <h2 className="text-black flex ml-[10px] font-semibold">Distance</h2>
          <div className="Right flex items-center">
            <input
              className="w-full bg-transparent text-end text-black font-semibold outline-none"
              placeholder="0"
              name="distance"
              min={0}
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              maxLength={2}
              required
            />
            <label htmlFor="distance" className="h-full text-right bg-antiquewhite border-none outline-none mr-2 ml-2 flex items-center text-black font-semibold">
              KM
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Distance;
