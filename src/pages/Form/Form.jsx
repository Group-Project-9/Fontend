import React, { useState } from "react";
import Axios from "axios";

import Activity from "./Activity/Activity";
import DateTime from "./Activity/DateTime";
import Duration from "./Activity/Duration";
import Distance from "./Activity/Distance";
import Note from "./Activity/Note";
import Location from "./Activity/Location";
import BtnSave from "./Activity/ButtonSave";


const Form = () => {
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
  const [userInfo, setUserInfo] = useState({

  });

  const duration = (hour * 60) + minute;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "/api/auth/activity";

    const dataToSend = {
      email: 'test@example.com',
      activity: activity,
      date: date,
      minute: minute, 
      location: location,
      distance: distance,
      note: note,
      image: imagePreview,
    };

    try {
      const response = await Axios.post(apiUrl, dataToSend);

      console.log("API Response:", response.data);
      // console.log("activity:", activity);
      // console.log("dateTime:", date, time);
      // console.log("duration:", hour + " Hour", minute + " Minute");
      // console.log("location:", location);
      // console.log("distance:", distance + " Kilometers");
      // console.log("note:", note);
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
    <main className="h-full w-full flex flex-col ">
      <div className="w-full h-24 flex items-center justify-center bg-gradient-to-l from-[#006ED5] via-[#0097DC] to-[#00BFD1] rounded-2xl">
        <h1 className="text-center mt-10  text-[2rem]"> Create Activity</h1>
      </div>
      <div className="h-full w-full flex justify-evenly items-center gap-20 min-w-[964px] max-w-[1200px] h-full ">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 relative "
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
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-center font-semibold text-xl text-slate-500">
            
            Upload your image
          </h1>
          <div
            id="uploadIMG"
            className="w-[350px] h-[350px] relative border bg-image rounded-xl transform transition duration-500 hover:scale-100 overflow-hidden bg-center bg-no-repeat flex justify-center text-black items-center text-center bg-50 bg-contain bg-sky-500"
          >
              <img
                className="w-20 absolute"
                src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
                alt="Image"
              />
            
            <input
              className="w-full h-full absolute inset-0 opacity-0"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="Upload"
            />
            {imagePreview && (
              <div className="flex items-center h-full w-full bg-black justify-center">
                <img
                  src={imagePreview}
                  alt="Selected Image"
                  className="w-full h-full object-cover z-10 "
                />
                <button
                  className=" z-30 absolute w-7 h-7 rounded-full bg-amber-900 top-2 right-2 text-slate-200"
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
