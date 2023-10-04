import React, { useState } from "react";
import Activity from "./Activity/Activity";
import DateTime from "./Activity/DateTime";
import Duration from "./Activity/Duration";
import Distance from "./Activity/Distance";
import Note from "./Activity/Note";
import Location from "./Activity/Location";
import BtnSave from "./Activity/ButtonSave";

import "./form.css";

const Form = () => {
  const [selectOptions, setSelectOptions] = useState("1");
  const [imagePreview, setImagePreview] = useState(null);

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
          <form className="flex flex-col gap-3 relative ">
            <Activity
              selectOptions={selectOptions}
              handleChange={handleChange}
            />
            <DateTime />
            <Duration />
            <Distance selectOption={selectOptions} />{" "}
            {/* Use selectOption here */}
            <Location />
            <Note />
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
            className="w-[350px] h-[350px] relative border bg-image rounded-xl overflow-hidden"
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
