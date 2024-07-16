import React from "react";

const DashboardOverviewSection = () => {
  return (
    <div className=" border-red-400 border-2 bg-slate-600">
      <div className="pb-4">
        <p className="font-bold">Dashboard</p>
        <p className="text-sm">Overview of Latest Month</p>
      </div>
      <div>
        <p className="text-2xl">$6468.96</p>
        <p className="text-sm">Current Month Earnings</p>
      </div>
      <div className="py-4">
        <p className="text-2xl">82</p>
        <p className="text-sm">Current Month Sales</p>
      </div>
      <button className="bg-gradient-to-r from-pink-500 to-orange-300 text-white text-xs py-2 px-4 rounded-full">
        Last Month Summary
      </button>
    </div>
  );
};

export default DashboardOverviewSection;
