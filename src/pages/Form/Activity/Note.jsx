import React from "react";

const Note = ({note, setNote}) => {
  return (
    <>
      <div className="border-2 h-14 Box">
        <h2 className="mr-2">Note</h2>
      </div>
      <textarea 
      value={note} 
      onChange={(e) => setNote(e.target.value)}
      className="w-full rounded-sm resize-none h-[150px] text-black font-semibold"></textarea>
    </>
  );
};

export default Note;
