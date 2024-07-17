import React from "react";
import Pies from "../../../Component/Ui/Chart/Pies";

const DashboardTrafficSection = () => {
  return (
    <div className="bg-slate-700 rounded p-5">
      <div>
        <p className="text-lg md:text-xl font-semibold mb-4 text-white">
          Traffic
        </p>

        <Pies />

        <div className="flex flex-row md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-8 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">33%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-purple-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-2">Facebook</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">55%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-red-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-2">Youtube</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">12%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-green-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-2">Direct Searching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTrafficSection;
