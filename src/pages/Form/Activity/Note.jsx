import React from "react";

const Note = () => {
  return (
    <>
      <div className="border-2 h-14 Box">
        <h2 className="mr-2">Note</h2>
      </div>
      <textarea className="w-full rounded-sm resize-none h-[150px] text-black font-semibold"></textarea>
    </>
  );
};

export default Note;
