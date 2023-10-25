import React from "react";
import { Link } from "react-router-dom";

const Log_out = () => {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full flex justify-center items-center ">
      {/* container */}
      <div className="flex flex-col w-full items-center text-center ">        
        {/* ANNOUNCE - LOGGED OUT */}
        <div>          
          <h1 className="text-2xl md:text-4xl xl:text-7xl text-inherit my-10">
            YOU HAVE BEEN LOGGED OUT
          </h1>
        </div>
        {/* BUTTON RETURN TO Login */}
        <div>
          <Link to="/login">
            <button
              type="submit"
              className="text-white my-5 p-3 text-center rounded-md bg-red-500 hover:bg-red-700 transition-all duration-300"
            >
              RETURN TO LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Log_out;
