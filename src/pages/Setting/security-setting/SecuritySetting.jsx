import React from "react";

const Security_setting = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl mb-10 text-center">SECURITY SETTING</h1>
      </div>

      {/* Field OLD PASSWORD */}
      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">OLD PASSWORD</div>
        <div className="w-[15%] text-left "></div>
        <input
          type="number"
          placeholder="OLD PASSWORD"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* Field NEW PASSWORD */}
      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">NEW PASSWORD</div>
        <div className="w-[15%] text-left "></div>
        <input
          type="number"
          placeholder="NEW PASSWORD"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      {/* Field CONFIRM PASSWORD */}
      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">CONFIRM PASSWORD</div>
        <div className="w-[15%] text-left "></div>
        <input
          type="number"
          placeholder="CONFIRM PASSWORD"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="flex justify-center w-full mt-10">
        <a href="/settings">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 ">
            SAVE
          </button>
        </a>
      </div>
    </div>
  );
};

export default Security_setting;
