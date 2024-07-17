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
    <div className=" px-4">
      <div className="bg-slate-700 p-4">
        <div className="ps-4 pb-4">
          <p className="font-bold text-lg">Order Status</p>
          <p className="text-gray-400 text-sm md:text-base">
            Overview of last Month
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-wrap gap-x-4 ps-4 mb-4 md:mb-0">
            <span className="bg-orange-500 px-2 py-1 rounded flex items-center gap-x-2">
              <FaClock className="w-5 h-5" />
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
          <div className="flex gap-x-4 w-full md:w-auto">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
              className="px-5 py-1 rounded bg-slate-500 text-white w-full md:w-auto"
            />
            <span className="bg-slate-500 px-2 py-2 rounded">
              <FaFile className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-4 px-4 text-left text-sm md:text-base">
                  Invoice
                </th>
                <th className="py-4 px-4 text-left text-sm md:text-base">
                  Customers
                </th>
                <th className="py-4 px-4 text-left text-sm md:text-base">
                  From
                </th>
                <th className="py-4 px-4 text-left text-sm md:text-base">
                  Price
                </th>
                <th className="py-4 px-4 text-right text-sm md:text-base">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className="text-white text-end text-sm">
                  <span className="bg-pink-500 px-3 py-1 rounded-lg">
                    Process
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className="text-white text-end text-sm">
                  <span className="bg-purple-500 px-5 py-1 rounded-lg">
                    Open
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className="text-white text-end text-sm">
                  <span className="bg-sky-500 px-3 py-1 rounded-lg">
                    On Hold
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className="text-white text-end text-sm">
                  <span className="bg-green-500 px-4 py-1 rounded-lg">
                    Process
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4">12386</td>
                <td className="py-4 px-4 text-sm text-gray-400">Charly Dues</td>
                <td className="py-4 px-4 text-sm text-gray-400">Russia</td>
                <td className="py-4 px-4 text-sm text-gray-400">$2652</td>
                <td className="text-white text-end text-sm">
                  <span className="bg-yellow-500 px-4 py-1 rounded-lg">
                    Unpaid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 mt-4">
            <div>
              <p className="px-4">Showing 1 to 20 entries</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <FaArrowLeft className="hover:text-orange-500" />
              <div className="px-2">
                <a
                  href="#"
                  className="px-2 hover:bg-orange-500 hover:px-1 hover:rounded-full"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-2 hover:bg-orange-500 hover:px-1 hover:rounded-full"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-2 hover:bg-orange-500 hover:px-1 hover:rounded-full"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-2 hover:bg-orange-500 hover:px-1 hover:rounded-full"
                >
                  4
                </a>
                <a
                  href="#"
                  className="px-2 hover:bg-orange-500 hover:px-1 hover:rounded-full"
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
