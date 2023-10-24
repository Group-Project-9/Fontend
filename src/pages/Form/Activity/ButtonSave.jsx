import React from "react";

const BtnSave = () => {
  return (
    <div className="w-full flex justify-end shadow-lg ">
      <button
        type="submit"
        className="w-full h-[55px] font-semibold text-white duration-300 hover:text-[#fbfbfb] hover:bg-[#8c52d2] bg-sky-600 rounded-xl"
      >
        Save
      </button>
    </div>
  );
};

export default BtnSave;
