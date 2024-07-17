import React from "react";
import Nav from "../../../Component/Ui/Layout/Nav/Nav";
import DashboardAreaChartSection from "./DashboardAreaChartSection";
import DashboardEarningSection from "./DashboardEarningSection";
import DashboardOverviewSection from "./DashboardOverviewSection";
import DashboardTrafficSection from "./DashboardTrafficSection";
import RecentActivity from "../RecentActivities/RecentActivity";
import OrderStatus from "../OrderStatus/OrderStatus";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Nav sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className="bg-slate-800 text-white p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <div className="flex flex-col sm:flex-row">
              <DashboardOverviewSection className="mb-4 sm:mb-0 sm:w-1/2" />
              <DashboardAreaChartSection className="sm:w-1/2" />
            </div>
            <div className="mt-4">
              <DashboardEarningSection />
            </div>
          </div>
          <div className="lg:w-1/3 h-full mt-4 lg:mt-0">
            <DashboardTrafficSection />
          </div>
        </div>
        <div className="flex justify-evenly mt-4">
          <RecentActivity />
          <OrderStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
