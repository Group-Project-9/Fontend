import ImgAvatar from "../../../assets/avatar-defult.svg";


const User_account = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 text-center">PROFILE</h1>
      <div className="flex justify-center items-center h-full avatar mb-10">
        <div className="w-24 border-solid border-2 border-white rounded-full ">
          <img src={ImgAvatar} />
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="mr-10">USER NAME</div>
        <div>ROBERT11</div>
      </div>
      <div className="flex justify-center ">
        <div className="mr-10">FULL NAME</div>
        <div>ROBERT SMITH</div>
      </div>
      <div className="flex justify-center ">
        <div className="mr-10 ">DATE OF BIRTH</div>
        <div>30/09/1980</div>
      </div>
      <div className="flex justify-center ">
        <div className="mr-10">HEIGHT</div>
        <div>180 cm</div>
      </div>
      <div className="flex justify-center ">
        <div className="mr-10">WEIGHT</div>
        <div>80 KG</div>
      </div>
      <div className="flex justify-center items-center mt-10">
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
