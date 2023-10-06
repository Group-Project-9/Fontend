import React from "react";

const Log_out = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen mx-auto ">
      <div>
        <p className="text-2xl mb-10 text-center">YOU HAVE BEEN LOGGED OUT</p>
      </div>
      {/* BUTTON RETURN TO Login */}
      <div className="flex justify-center w-full mt-10">
        <a href="/login">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 ">
            RETURN TO LOGIN
          </button>
        </a>
      </div>
    </div>
  );
};

export default Log_out;
