import React from "react";


const Location = ({location , setLocation}) => {
  return (
    <div className="Box h-14">
      <h2 className="mx-[10px] flex items-center justify-center">Location</h2>
      <input 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        className="Right font-semibold mr-2 w-[200%]" type="text"       
      />
    </div>
  );
};

export default Location;
