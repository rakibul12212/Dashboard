import React from "react";
import {
  FaBandcamp,
  FaBell,
  FaCalendar,
  FaComment,
  FaEdit,
  FaEnvelope,
  FaExclamationTriangle,
  FaHome,
  FaImage,
  FaList,
  FaMagnet,
  FaMap,
  FaTable,
  FaThLarge,
  FaThList,
  FaUser,
  FaWpforms,
} from "react-icons/fa";
import { FaCartShopping, FaChartArea, FaFilePdf } from "react-icons/fa6";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-slate-600 h-full fixed lg:block lg:w-1/5 xl:w-64`}
    >
      <div>
        <h1 className="text-2xl font-bold text-white flex justify-center items-center bg-gradient-to-r from-red-400 to-pink-600 py-1">
          <span className="text-xl text-orange-400 bg-orange-200 rounded-full px-2 m-1">
            D
          </span>
          <p>Dashboard</p>
        </h1>
      </div>
      <ul className="mt-3 text-white text-sm">
        <li className="mb-1 hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="/" className="px-3">
            <FaHome className="inline-block w-4 h-4 mr-3 mb-1"></FaHome>
            Overview
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaThLarge className="inline-block w-4 h-4 mr-3 mb-1"></FaThLarge>
            Widgets
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaThList className="inline-block w-4 h-4 mr-3 mb-1"></FaThList>
            Ui Elements
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaMagnet className="inline-block w-4 h-4 mr-3 mb-1"></FaMagnet>
            Advanced ui
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaWpforms className="inline-block w-4 h-4 mr-3 mb-1"></FaWpforms>
            Form Elements
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaEdit className="inline-block w-4 h-4 mr-3 mb-1"></FaEdit>
            Editor
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaChartArea className="inline-block w-4 h-4 mr-3 mb-1"></FaChartArea>
            Charts
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaTable className="inline-block w-4 h-4 mr-3 mb-1"></FaTable>
            Tables
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaComment className="inline-block w-4 h-4 mr-3 mb-1"></FaComment>
            Popups
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaBell className="inline-block w-4 h-4 mr-3 mb-1"></FaBell>
            Notifications
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaBandcamp className="inline-block w-4 h-4 mr-3 mb-1"></FaBandcamp>
            Icons
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaMap className="inline-block w-4 h-4 mr-3 mb-1"></FaMap>
            Maps
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaUser className="inline-block w-4 h-4 mr-3 mb-1"></FaUser>
            User Pages
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaExclamationTriangle className="inline-block w-4 h-4 mr-3 mb-1"></FaExclamationTriangle>
            Error Pages
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaCartShopping className="inline-block w-4 h-4 mr-3 mb-1"></FaCartShopping>
            E-commerce
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaEnvelope className="inline-block w-4 h-4 mr-3 mb-1"></FaEnvelope>
            E-mail
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaCalendar className="inline-block w-4 h-4 mr-3 mb-1"></FaCalendar>
            Calendar
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaList className="inline-block w-4 h-4 mr-3 mb-1"></FaList>
            Todo list
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaImage className="inline-block w-4 h-4 mr-3 mb-1"></FaImage>
            Gallery
          </a>
        </li>
        <li className="mb-1   hover:text-green-300 hover:border-l-4 hover:border-yellow-500 pt-1">
          <a href="#" className="px-3">
            <FaFilePdf className="inline-block w-4 h-4 mr-3 mb-1"></FaFilePdf>
            Documents
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
