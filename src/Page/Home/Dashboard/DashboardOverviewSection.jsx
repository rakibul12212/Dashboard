import React from "react";

const DashboardOverviewSection = () => {
  return (
    <div className="rounded bg-slate-700 px-10">
      <div className="pb-8">
        <p className="font-bold">Dashboard</p>
        <p className="text-sm">Overview of Latest Month</p>
      </div>
      <div>
        <p className="text-4xl">$6468.96</p>
        <p className="text-sm">Current Month Earnings</p>
      </div>
      <div className="py-8">
        <p className="text-4xl">82</p>
        <p className="text-sm">Current Month Sales</p>
      </div>
      <div className="pb-8">
        <button className="bg-gradient-to-r from-pink-500 to-orange-300 text-white text-xs py-3 px-4 rounded-full">
          Last Month Summary
        </button>
      </div>
    </div>
  );
};

export default DashboardOverviewSection;
