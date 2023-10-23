import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiMiniMapPin } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";

// https://react-icons.github.io/react-icons
// npm install react-icons --save

const HelpSupport = () => {
  return (
    <div className="bg-gray-100 h-full w-full py-8">
      <div className='flex w-full h-20 justify-center items-center px-10 border bg-white rounded-lg shadow-md'>
                <h1 className='text-2xl xl:text-5xl text-inherit'>Help & Support</h1>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md m-5">
        {/* <h2 className="text-2xl font-semibold mb-4">Help & Support</h2> */}

        <p className="text-gray-600 mb-4">
          If you need assistance or have any questions, please feel free to contact us:
        </p>

        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-2">Email:</p>
          <p className="text-blue-500">
            <a href="mailto:fitness.diary@support.com">fitness.diary@support.com</a>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-2">Phone:</p>
          <p className="text-blue-500">(+66) 89-000-0000</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-2">Location:</p>
          <p className="text-blue-500">BANGKOK, THAILAND</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
