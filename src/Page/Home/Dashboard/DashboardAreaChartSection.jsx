import React from "react";
import Chart from "../../../Component/Ui/Chart/Chart";

const DashboardAreaChartSection = () => {
  return (
    <div className="bg-slate-700 p-5 md:p-8 lg:p-5">
      <div
        id="line-chart-heading"
        className="flex flex-col md:flex-row justify-between mb-4"
      >
        <div id="chart-heading-left" className="mb-4 md:mb-0 lg:ps-12">
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
          className="flex justify-around gap-x-4 text-sm md:pr-3"
        >
          <div className="flex items-center">
            <p className="text-xs">Online</p>
          </div>
          <div className="flex items-center">
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
