import React from "react";
import Nav from "../../../Component/Ui/Layout/Nav/Nav";
import DashboardAreaChartSection from "./DashboardAreaChartSection";
import DashboardEarningSection from "./DashboardEarningSection";
import DashboardOverviewSection from "./DashboardOverviewSection";
import DashboardTrafficSection from "./DashboardTrafficSection";
import RecentActivity from "../RecentActivities/RecentActivity";
import OrderStatus from "../OrderStatus/OrderStatus";
import ShortOverview from "../ShortOverview/ShortOverview";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Nav sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className="bg-slate-800 text-white p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DashboardOverviewSection />
              <DashboardAreaChartSection />
            </div>
            <div className="mt-4">
              <DashboardEarningSection />
            </div>
          </div>
          <div className="lg:col-span-1">
            <DashboardTrafficSection />
          </div>
        </div>
        <div className="mt-4">
          <ShortOverview />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-4 mt-4 ">
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
          <div className="lg:col-span-3">
            <OrderStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
