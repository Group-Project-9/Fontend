import { useState } from "react";

import Activity from "./Activity/Activity";
import DateTime from "./Activity/DateTime";
import Duration from "./Activity/Duration";
import Distance from "./Activity/Distance";
import Note from "./Activity/Note";
import Location from "./Activity/Location";
import BtnSave from "./Activity/ButtonSave";
import Axios from 'axios'

import "./form.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3000/form";

    const dataToSend = {
      activity: activity,
      date: date,
      time: time,
      hour: hour,
      minute: minute,
      location: location,
      distance: distance,
      note: note,
      image: imagePreview,
    };

    try {
      const response = await Axios.post(apiUrl, dataToSend);

      console.log("API Response:", response.data);
      console.log("activity:", activity);
      console.log("dateTime:", date, time);
      console.log("duration:", hour + " Hour", minute + " Minute" );
      console.log("location:", location);
      console.log("distance:", distance + " Kilometers");
      console.log("note:", note);
      
    } catch (error) {
      // Handle errors here
      console.error("API Error:", error);
    }
  };


  const handleChange = (event) => {
    setSelectOptions(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
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

  return (
    <div className="h-screen flex flex-col ">
      <h1 className="text-center mt-10  text-[2rem]"> Create Activity</h1>
      <div className="h-100 flex justify-evenly items-center gap-20 min-w-[964px] max-w-[1200px] h-full ">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative ">
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
              selectOption={selectOptions} />{" "}
            
            <Location 
              location={location}
              setLocation={setLocation}

            />
             
            <Note 
              note={note}
              setNote={setNote}

            />
            <BtnSave />
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-center font-semibold text-xl">
            {" "}
            Upload your image
          </h1>
          <div
            id="uploadIMG"
            className="w-[350px] h-[350px] relative border bg-image rounded-xl overflow-hidden bg-center bg-no-repeat bg-50 bg-contain bg-[antiquewhite]"
        
          >
            <input
              className="w-full h-full absolute inset-0 opacity-0"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="Upload"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected Image"
                className="w-full h-full object-contain z-10"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
