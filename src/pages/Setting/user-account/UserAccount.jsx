import React from "react";
import ImgAvatar from "../../../assets/avatar-default.svg";

const User_account = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mx-auto w-6/12">
      <div>
        <h1 className="text-5xl mb-10 text-center">PROFILE</h1>
        <div className="flex justify-center items-center avatar mb-10">
          <div className="w-24 border-solid border-2 border-white rounded-full ">
            <img src={ImgAvatar} />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">USER NAME</div>
        <div className="w-[15%] text-left "></div>
        <div className="w-[35%] text-left ">ROBERT11</div>
      </div>

      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">FULL NAME</div>
        <div className="w-[15%] text-left "></div>
        <div className="w-[35%] text-left ">ROBERT SMITH</div>
      </div>

      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">DATE OF BIRTH</div>
        <div className="w-[15%] text-left "></div>
        <div className="w-[35%] text-left ">30/09/1980</div>
      </div>

      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">HEIGHT</div>
        <div className="w-[15%] text-left "></div>
        <div className="w-[35%] text-left ">180 cm</div>
      </div>

      <div className="flex justify-center w-full mb-3">
        <div className="w-[20%] text-left "></div>
        <div className="w-[30%] text-left ">WEIGHT</div>
        <div className="w-[15%] text-left "></div>
        <div className="w-[35%] text-left ">80 KG</div>
      </div>

      <div className="flex justify-center w-full mt-10">
        <a href="/settings/user-account/edit">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-1 ">
            Edit
          </button>
        </a>
      </div>
    </div>
  );
};

export default User_account;
