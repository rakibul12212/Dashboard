import React from "react";
import Pies from "../../../Component/Ui/Chart/Pies";

const DashboardTrafficSection = () => {
  return (
    <div className="bg-slate-700 rounded">
      <div>
        <p>Traffic</p>

        <Pies />

        <div className="flex justify-center items-center gap-x-8">
          <div>
            <p className="text-4xl font-bold">33%</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dot text-purple-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p>Facebook</p>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold">55%</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dot text-red-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p>Youtube</p>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold">12%</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dot text-green-400"
              >
                <circle cx="8" cy="12.1" r="1" />
              </svg>
              <p>Direct Searching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTrafficSection;
