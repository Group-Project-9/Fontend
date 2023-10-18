import React from "react";


const Location = ({location , setLocation}) => {
  return (
    <div className="flex items-center justify-between bg-[antiquewhite] text-black w-[400px] h-14 border rounded-xl">
      <h2 className="mx-[10px] ml-[10px] flex items-center justify-center text-black font-semibold">Location</h2>
      <input 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        className=" h-full text-right bg-[antiquewhite] border-none outline-none font-semibold mr-2 w-[200%]" type="text"   
        required    
      />
    </div>
  );
};

export default Location;
