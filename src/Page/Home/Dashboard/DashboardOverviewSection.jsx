import React from "react";

const DashboardOverviewSection = () => {
  return (
    <div className="rounded bg-slate-700 px-10 py-6">
      <div className="pb-8">
        <p className="text-xl font-bold">Dashboard</p>
        <p className="text-xs">Overview of Latest Month</p>
      </div>
      <div>
        <p className="text-3xl">$6468.96</p>
        <p className="text-sm">Current Month Earnings</p>
      </div>
      <div className="py-8">
        <p className="text-3xl">82</p>
        <p className="text-sm">Current Month Sales</p>
      </div>
      <div className="pb-8">
        <button className="bg-gradient-to-r from-pink-600 to-red-400 text-white text-xs py-3 px-4 rounded-full">
          Last Month Summary
        </button>
      </div>
    </div>
  );
};

export default DashboardOverviewSection;
