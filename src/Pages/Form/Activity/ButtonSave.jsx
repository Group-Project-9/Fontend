import React from "react";

const BtnSave = () => {
  return (
    <div className="w-full flex justify-center">
      <button to="/profile"
        type="submit"
        className="w-full md:w-4/5 md:w-full h-12 font-semibold text-white hover:text-[#fbfbfb] hover:opacity-80 bg-[#674B36] rounded-xl"
      >
        Save
      </button>
    </div>
  );
};

export default BtnSave;
