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

        <div className="flex flex-row md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">33%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-purple-400"
              >
                <circle cx="14" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-1">Facebook</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">55%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-red-600"
              >
                <circle cx="14" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-1">Youtube</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold text-white">12%</p>
            <div className="flex justify-center items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot text-sky-500"
              >
                <circle cx="14" cy="12.1" r="1" />
              </svg>
              <p className="text-sm text-white ml-1">Searching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTrafficSection;
