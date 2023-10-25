
const Note = ({note, setNote}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-black w-full h-14 border rounded-xl">
        <h2 className="flex ml-2 text-black font-semibold">Note:</h2>
      </div>
      <textarea  
      value={note} 
      onChange={(e) => setNote(e.target.value)}
      className="w-full resize-none h-12 md:h-24 text-black font-semibold outline-none bg-[#E5DFDB] rounded-xl border-b-2 border-[#5C675F]  p-[10px]"></textarea>
    </div>
  );
};

export default Note;
