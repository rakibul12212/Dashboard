import React from "react";
import {
  FaAlignRight,
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaExclamationCircle,
  FaFile,
  FaTrash,
} from "react-icons/fa";

const OrderStatus = () => {
  return (
    <div>
      <div className="container bg-slate-700 p-4">
        <div className="ps-4 pb-4">
          <p className="font-bold">Order Status</p>
          <p className=" text-gray-400">Overview of last Month</p>
        </div>
        <div className="flex justify-between">
          <div className="flex  gap-x-4 ps-4 ">
            <span className="bg-orange-500 px-2 py-1 rounded">
              <FaClock className="inline-block w-5 h-5 mr-1 mb-1"></FaClock>
              Add
            </span>

            <span className="bg-slate-500 px-2 py-2 rounded">
              <FaTrash className="w-5 h-5" />
            </span>
            <span className="bg-slate-500 px-2 py-2 rounded">
              <FaExclamationCircle className="w-5 h-5" />
            </span>
            <span className="bg-slate-500 px-2 py-2 rounded">
              <FaFile className="w-5 h-5" />
            </span>
          </div>
          <div className="flex gap-x-4">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
              className="px-5 py-1 rounded bg-slate-500 text-white"
            />
            <span className="bg-slate-500 px-2 py-2 rounded">
              <FaFile className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead className="">
              <tr>
                <th className="py-4 px-4 text-left">Invoice</th>
                <th className="py-4 px-4 text-left">Customers</th>
                <th className="py-4 px-4 text-left">From</th>
                <th className="py-4 px-4 text-left">Price</th>
                <th className="py-4 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4 ">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className=" text-white text-end text-sm">
                  <span className="bg-pink-500 px-3 py-1 rounded-lg">
                    Process
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className="py-4 px-4 ">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className=" text-white  text-end text-sm">
                  <span className="bg-purple-500 px-5 py-1 rounded-lg">
                    Open
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 ">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className=" text-white text-end text-sm">
                  <span className="bg-sky-500 px-3 py-1  rounded-lg">
                    On Hold
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className="py-4 px-4 text-sm">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className=" text-white text-end text-sm">
                  <span className="bg-green-500 px-4 py-1 rounded-lg">
                    Process
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 ">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className=" text-white text-end text-sm">
                  <span className="bg-yellow-500 px-4 py-1 rounded-lg">
                    Unpaid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between items-center text-sm text-slate-500">
            <div>
              <p className="px-4">Showing 1 to 20 entries</p>
            </div>
            <div className="flex items-center">
              <FaArrowLeft className="hover:text-orange-500" />
              <div className="px-2">
                <a
                  href=""
                  className="px-2 hover:bg-orange-500 hover:px-1  hover:rounded-full"
                >
                  1
                </a>
                <a
                  href=""
                  className="px-2 hover:bg-orange-500 hover:px-1  hover:rounded-full"
                >
                  2
                </a>
                <a
                  href=""
                  className="px-2 hover:bg-orange-500 hover:px-1  hover:rounded-full"
                >
                  3
                </a>
                <a
                  href=""
                  className="px-2 hover:bg-orange-500 hover:px-1  hover:rounded-full"
                >
                  4
                </a>
                <a
                  href=""
                  className="px-2 hover:bg-orange-500 hover:px-1  hover:rounded-full"
                >
                  5
                </a>
              </div>
              <FaArrowRight className="hover:text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
