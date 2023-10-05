import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";

// https://react-icons.github.io/react-icons
// npm install react-icons --save

const HelpSupport = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 text-center">Help Support</h1>
      {/* flex container */}
      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-start ">
          {/*flex box-1 */}
          <div className="flex flex-row mb-2">
            <div className="mr-10 self-center">
              <AiOutlineMail style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="mr-10 self-center" style={{ fontSize: "1.5rem" }}>
              <p>fitness.diary@support.com</p>
            </div>
          </div>

          {/*flex box-2 */}
          <div className="flex flex-row mb-2">
            <div className="mr-10 self-center">
              <IoCallOutline style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="mr-10 self-center" style={{ fontSize: "1.5rem" }} >
              <p>(+66)89-000-0000</p>
            </div>
          </div>

          {/*flex box-3 */}
          <div className="flex flex-row mb-2">
            <div className="mr-10 self-center" style={{ fontSize: "1.5rem" }} >
              <HiMiniMapPin />
            </div>
            <div className="mr-10 self-center" style={{ fontSize: "1.5rem" }} >
              <p>BANGKOK, THAILAND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
