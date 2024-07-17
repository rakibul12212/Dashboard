import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ShortOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded bg-pink-500 p-8">
        <div>
          <p>Revenue Status</p>
        </div>
        <div className="flex justify-between items-center gap-x-8 pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-waves"
          >
            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          </svg>
          <div>
            <p className="text-2xl font-bold">$ 432</p>
            <p className="text-gray-300">Jan 01 - Jan 10</p>
          </div>
        </div>
      </div>
      <div className="rounded bg-gradient-to-r from-purple-800 via-purple-670 to-purple-600 p-8">
        <div>
          <p>Page View</p>
          <p className="text-2xl font-bold">$ 432</p>
        </div>
      </div>
      <div className="rounded bg-sky-500 p-8">
        <div>
          <p>Bounce Rate</p>
        </div>
        <div className="flex justify-between items-center gap-x-8 pt-4">
          <div>
            <p className="text-2xl font-bold">$ 432</p>
            <a
              href="#"
              className="flex items-center bg-white mt-2 text-black rounded"
            >
              <span>month</span>
              <span>
                <FaChevronDown className="pt-1" />
              </span>
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-audio-lines"
          >
            <path d="M2 10v3" />
            <path d="M6 6v11" />
            <path d="M10 3v18" />
            <path d="M14 8v7" />
            <path d="M18 5v13" />
            <path d="M22 10v3" />
          </svg>
        </div>
      </div>
      <div className="rounded bg-yellow-500 p-8">
        <div>
          <p>Revenue Status</p>
        </div>
        <div className="flex justify-between items-center gap-x-8 pt-4">
          <img
            src="https://i.ibb.co/2h2BQn5/equalizer.png"
            alt="Equalizer"
            className="w-14 h-14"
          />
          <div>
            <p className="text-2xl font-bold">$ 432</p>
            <p className="text-gray-300">Jan 01 - Jan 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortOverview;
