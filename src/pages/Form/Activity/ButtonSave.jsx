import React from "react";

const BtnSave = () => {
  return (
    <div className="w-full flex justify-end">
      <button to="/profile"
        type="submit"
        className="w-full h-[55px] font-semibold text-white hover:text-[#fbfbfb] hover:bg-[#8c52d2] bg-sky-600 rounded-xl"
      >
        Save
      </button>
    </div>
  );
};

export default BtnSave;
