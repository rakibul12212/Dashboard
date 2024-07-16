import { useState } from "react";
import Dashboard from "../../../Page/Home/Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default MainLayout;
