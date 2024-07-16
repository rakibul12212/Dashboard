import React from "react";
import Dashboard from "./Dashboard/Dashboard";

import RecentActivity from "./RecentActivities/RecentActivity";
import OrderStatus from "./OrderStatus/OrderStatus";
import Overview from "./Overview/Overview";

const HomeIndex = () => {
  return (
    <div>
      <Dashboard />

      {/* <Overview/>
         <RecentActivity/>
         <OrderStatus/>    */}
    </div>
  );
};

export default HomeIndex;
