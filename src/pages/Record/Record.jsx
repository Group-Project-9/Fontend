import React from "react";
import { BiAlarm ,BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";


const Record = () => {
  return (
    <div className="แยก1.ซ้าย 2.ขวา หน้าทั้งหมดของRecord w-full h-full overflow-hidden flex">
      <div className="ซ้าย w-3/4 h-full relative border">
        <div className="flex w-full h-20 justify-between items-center px-10 border">
          <h1 className="text-2xl border">Habit and Activity</h1>
          <button className="h-10 px-10 rounded-xl border">
            + Add Activity
          </button>
        </div>

        <div className="หน้าแสดง activity ทั้งหมด w-100 w-full h-auto flex flex-wrap p-10 justify-start gap-8 ">
          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>

          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>

          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>

          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>

          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>

          <div className="กล่องactivity มี1.ซ้าย2.ขวา แนวนอน rounded-2xl w-[250px] flex  overflow-hidden  h-[175px]">
            <div className="ซ้าย w-1/2 h-full bg-sky-500 p-3 flex flex-col justify-center">
              <p className="text-white font-semibold">Running</p>
              <br></br>
              <p className=" text-sm flex text-white font-semibold items-center"><AiOutlineCalendar/>: 20-10-2024</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiAlarm/>: 25 minute</p>
              <p className=" text-sm flex text-white font-semibold items-center"><BiCurrentLocation/>: RCA</p>
            </div>
            <div className="ขวา w-1/2">
              <img
                className="h-full object-cover"
                src="https://i.ibb.co/QHSCTRZ/Screenshot-2023-10-23-222636.png"
              />
            </div>
          </div>
          
        </div>
      </div>
      <div className="ขวา w-1/4 h-full border rounded-r-3xl overflow-hidden">
        <img 
            className="w-full h-full object-cover" 
            src="https://i.ibb.co/k9bR69F/Screenshot-2023-10-23-225025.png" /></div>
    </div>
  );
};

export default Record;
