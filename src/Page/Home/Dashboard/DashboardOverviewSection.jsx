import React from "react";

const DashboardOverviewSection = () => {
  return (
    <div className="bg-slate-700 px-8 lg:px-5 py-6 sm:col-span-1">
      <div className="pb-6 lg:pb-6">
        <p className="text-xl lg:text-2xl font-bold">Dashboard</p>
        <p className="text-xs lg:text-sm">Overview of Latest Month</p>
      </div>
      <div className="pb-6 lg:pb-6">
        <p className="text-3xl lg:text-4xl">$6468.96</p>
        <p className="text-sm">Current Month Earnings</p>
      </div>
      <div className="pb-6 lg:pb-6">
        <p className="text-3xl lg:text-4xl">82</p>
        <p className="text-sm">Current Month Sales</p>
      </div>
      <div className="pb-6 lg:pb-6">
        <button className="bg-gradient-to-r from-pink-600 to-red-400 text-white text-xs lg:text-sm py-2 px-4 lg:py-2 lg:px-6 rounded-full">
          Last Month Summary
        </button>
      </div>
    </div>
  );
};

export default DashboardOverviewSection;
