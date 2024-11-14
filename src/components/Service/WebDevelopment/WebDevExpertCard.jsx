import React from "react";
import { FaShapes } from "react-icons/fa";

const WebDevExpertCard = ({ heading, subHeading, icon, color }) => {
  return (
    <div className="hover:scale-105 hover:shadow-2xl hover:shadow-slate-100 bg-zinc-50 duration-200  relative flex flex-col my-6   border border-slate-200 rounded-3xl min-w-fit max-w-96 p-6">
      <div className="flex items-center mb-4 ">
        <div
          className={`h-12 w-12 flex items-center justify-center  text-slate-600 text-2xl ${color} rounded-full`}
        >
          {icon}
        </div>
        <h5 className="ml-3 text-slate-800 text-xl font-semibold">{heading}</h5>
      </div>
      <p className="block text-slate-500 leading-normal font-medium mb-4 text-base">
        {subHeading}
      </p>
    </div>
  );
};

export default WebDevExpertCard;
