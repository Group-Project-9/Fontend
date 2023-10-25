import { useState } from "react";
import Axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


import Activity from "./Activity/Activity";
import DateTime from "./Activity/DateTime";
import Duration from "./Activity/Duration";
import Distance from "./Activity/Distance";
import Note from "./Activity/Note";
import Location from "./Activity/Location";
import BtnSave from "./Activity/ButtonSave";

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Form = () => {

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [selectOptions, setSelectOptions] = useState("1");
  const [imagePreview, setImagePreview] = useState(null);

  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [note, setNote] = useState("");
  // const [userInfo, setUserInfo] = useState({

  // });
 // Check Current User



  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "/api/record/add";
    const duration = (parseFloat(hour) * 60) + parseFloat(minute);

    const dataToSend = {
      email: currentUser.email,
      activity: activity,
      date: date,
      minute: duration, 
      location: location,
      distance: distance,
      note: note,
      image: imagePreview,
    };

    try {
      const response = await Axios.post(apiUrl, dataToSend);

      // console.log(response)
      // console.log("API Response:", response.data);
      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {
      // Handle errors here
      console.error("API Error:", error);
    }
  };

  const handleChange = (event) => {
    setSelectOptions(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const resetImage = () => {
    setImagePreview(null);
  };

  return (
    <main className="h-full w-full flex flex-col justify-center gap-10 md:gap-[10vw] xl:gap-10 md:px-8 xl:px-8">
      <div className="w-full h-16 md:h-20 xl:h-24 flex items-center justify-center bg-[#674B36] rounded-2xl">
        <h1 className="text-center text-white font-medium text-[2rem]"> Create Your Activity</h1>
      </div>
      <div className="h-auto w-full flex flex-col xl:flex-row justify-evenly items-center border-4 border-[#A4826D] rounded-2xl">
        <div className="w-full h-full py-2 px-4 flex flex-col xl:flex-row xl:gap-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full h-auto flex-col gap-3 relative items-center py-2"
          >
            <Activity
              setActivity={setActivity}
              handleChange={handleChange}
              selectOptions={selectOptions}
            />
            <DateTime
              date={date}
              time={time}
              setDate={setDate}
              setTime={setTime}
            />
            <Duration
              hour={hour}
              minute={minute}
              setHour={setHour}
              setMinute={setMinute}
            />
            <Distance
              distance={distance}
              setDistance={setDistance}
              selectOption={selectOptions}
            />
            <Location location={location} setLocation={setLocation} />
            <Note note={note} setNote={setNote} />
            <BtnSave />
          </form>
          <div className="flex md:flex-col md:w-full md:gap-2 xl:gap-5">
          <div
            id="uploadIMG"
            className="w-full h-12 md:h-16 relative border rounded-xl transform transition duration-500 
            flex items-center justify-center bg-stone-500 hover:opacity-80 cursor-pointer"
          >
            <h1 className="font-bold text-white">Upload Image</h1>
            <input
              className="w-full h-full absolute inset-0 opacity-0"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="Upload"
            />
            </div>
            {imagePreview && (
              <div className="relative w-full flex h-20 xl:h-full items-center bg-black justify-center">
                <img
                  src={imagePreview}
                  alt="Selected Image"
                  className="w-full h-full object-cover z-10 "
                />
                <button
                  className="z-10 top-3 right-3 absolute w-10 h-10 rounded-full bg-red-700 text-slate-200 border-2 hover:border-4"
                  onClick={resetImage}
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
