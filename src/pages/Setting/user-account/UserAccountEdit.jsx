import React from "react";
import ImgAvatar from "../../../assets/avatar-defult.svg";


const UserAccountEdit = () => {
  return (
    <div className="flex flex-col items-center  ">
      {/*container*/}
      {/*flex-box-1*/}
      <div>
        <h1 className="text-5xl mb-10 ">EDIT PROFILE</h1>
      </div>
      {/*flex-box-2*/}
      {/*Avatar*/}
      <div className="avatar mb-10">
        <div className="w-24 border-solid border-2 border-white rounded-full ">
          <img src={ImgAvatar} />
        </div>
      </div>
      {/*file-input-pic-Avatar*/}
      <div className="mb-5">
        <input
          type="file"
          class="file-input file-input-bordered w-full max-w-xs mx-auto"
        />
      </div>
      {/*input-input-Placeholder-user*/}
      <div className="input-Placeholder-user w-56">
        {/*input-placeholder-USERNAME*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/*input-placeholder-FULLNAME*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Fullname"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/*input-placeholder-DATE*/}
        <div className=" mb-5 ">
          <input
            type="date"
            placeholder="DD/MM/YY"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/*input-placeholder-Height*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Height"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/*input-placeholder-Weight*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Weight"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      {/*btn-CANCEL-SAVE*/}
      <div className="flex flex-row">
        <div>
          <a href="/settings/user-account">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-2 w-32">
              CANCEL
            </button>
          </a>
        </div>
        <div>
          <a href="/settings/user-account">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-2 w-32">
              SAVE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserAccountEdit;
