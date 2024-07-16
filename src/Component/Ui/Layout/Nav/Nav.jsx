import React from "react";
import { FaBars, FaBell, FaCog, FaEnvelope, FaUser } from "react-icons/fa";

const Nav = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className="bg-slate-600 px-4 py-3 flex justify-between  ">
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}></FaBars>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="text-white">
          <FaBell className="w-4 h-4" />
        </div>
        <div className="text-white">
          <FaEnvelope className="w-4 h-4" />
        </div>
        <div className="text-white">
          <FaUser className="w-4 h-4" />
        </div>
        <div className="text-white">
          <FaCog className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
