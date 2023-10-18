import React, {useState, useEffect} from "react";
import axios from 'axios'
import ImgAvatar from "../../../assets/avatar-default.svg";


const UserAccountEdit = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [date, setDate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('', {username, fullname, date, height, weight })
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  };

  return (
    <div className="bg-zinc-100 drop-shadow-xl rounded-lg ">
    <div className="flex flex-col items-center  ">
      {/* ALL THINGS TO FILLS */}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
      <div className="input-Placeholder-user w-56 ">
        {/*input-placeholder-USERNAME*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/*input-placeholder-FULLNAME*/}
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Fullname"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        {/*input-placeholder-DATE*/}
        <div className=" mb-5 ">
          <input
            type="date"
            placeholder="DD/MM/YY"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setDate(e.target.value)}

          />
        </div>
        {/*input-placeholder-Height*/}
        <div className=" mb-5">
          <input
            type="number"
            placeholder="Height"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setHeight(e.target.value)}

          />
        </div>
        {/*input-placeholder-Weight*/}
        <div className=" mb-5">
          <input
            type="number"
            placeholder="Weight"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      </form>
      
      {/*btn-CANCEL-SAVE*/}
      <div className="flex flex-row mt-5">
        <div>
          <a href="/settings/user-account">
            <button type="button" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-2 w-32">
              CANCEL
            </button>
          </a>
        </div>
        <div>
          <a href="/settings/user-account">
            <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-2 w-32">
              SAVE
            </button>
          </a>
        </div>
      </div>

    </div>
    </div>
  );
};

export default UserAccountEdit;
