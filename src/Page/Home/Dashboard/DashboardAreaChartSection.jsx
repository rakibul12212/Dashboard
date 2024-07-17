import React from "react";
import Chart from "../../../Component/Ui/Chart/Chart";

const DashboardAreaChartSection = () => {
  return (
    <div className="bg-slate-700 p-5 md:p-8 lg:p-5">
      <div
        id="line-chart-heading"
        className="flex flex-col md:flex-row justify-between mb-4"
      >
        <div id="chart-heading-left" className="mb-4 md:mb-0 lg:ps-10">
          <div className="flex justify-around gap-x-2  pt-1 text-xs">
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dot text-red-400"
            >
              <circle cx="12" cy="12" r="1" />
            </svg> */}
            <p className="text-xs">Online</p>
          </div>
          <div className="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dot text-red-400"
            >
              <circle cx="12" cy="12" r="1" />
            </svg> */}
            <p className="text-xs">Store</p>
          </div>
        </div>
      </div>

      <div className=" h-full">
        <Chart />
      </div>
    </div>
  );
};

export default DashboardAreaChartSection;
