import React from "react";
import Chart from "../../../Component/Ui/Chart/Chart";

const DashboardAreaChartSection = () => {
  return (
    <div className="bg-slate-700 rounded">
      <div id="line-chart-heading" className="flex justify-evenly mb-4">
        <div id="chart-heading-left">
          <div className="flex justify-around gap-x-4 text-sm">
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
          <p>Online</p>
          <p>Store</p>
        </div>
      </div>

      <div>
        <Chart />
      </div>
    </div>
  );
};

export default DashboardAreaChartSection;
