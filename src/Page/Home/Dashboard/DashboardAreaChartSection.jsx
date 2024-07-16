import React from "react";
import Chart from "../../../Component/Ui/Chart/Chart";

const DashboardAreaChartSection = () => {
  return (
    <div className="bg-slate-700 rounded p-5">
      <div id="line-chart-heading" className="flex justify-evenly mb-4">
        <div id="chart-heading-left">
          <div className="flex justify-around gap-x-2 pt-1 text-sm">
            <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
              Daily
            </p>
            <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
              Weekly
            </p>
            <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
              Monthly
            </p>
            <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
              Yearly
            </p>
          </div>
        </div>
        <div
          id="chart-heading-right"
          className="flex justify-around gap-x-4 text-sm"
        >
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
            <p className="text-xs">Online</p>
          </div>
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
            <p className="text-xs">Store</p>
          </div>
        </div>
      </div>

      <div>
        <Chart />
      </div>
    </div>
  );
};

export default DashboardAreaChartSection;
