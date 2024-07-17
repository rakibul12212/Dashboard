import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-slate-700 p-5 w-full max-w-screen h-full mx-auto rounded">
      <p className="pb-10 font-bold text-lg lg:text-xl">Recent Activities</p>
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-5 pb-10">
          <div>
            <p className="text-xs ">40 Mins Ago</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-8 sm:h-8 md:w-6 md:h-6 bg-pink-500 rounded-full p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm ">Task Updated</p>
              <p className="text-xs ">Nikolai updated a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-5 pb-10">
          <div>
            <p className="text-xs ">10 Days Ago</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-8 sm:h-8 md:w-6 md:h-6 bg-purple-500 rounded-full p-1"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm ">Deal Added</p>
              <p className="text-xs ">Panshi updated a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-5 pb-10">
          <div>
            <p className="text-xs ">40 Mins Ago</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-8 sm:h-8 md:w-6 md:h-6 bg-sky-500 rounded-full p-1"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm ">Published Article</p>
              <p className="text-xs ">Sonshi updated a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-5 pb-10">
          <div>
            <p className="text-xs ">10 Days Ago</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-8 sm:h-8 md:w-6 md:h-6 bg-yellow-500 rounded-full p-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm ">Dock Updated</p>
              <p className="text-xs ">Monshi updated a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-x-5">
          <div>
            <p className="text-xs ">40 Mins Ago</p>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-8 sm:h-8 md:w-6 md:h-6 bg-green-500 rounded-full p-1"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <path d="M8 12h.01" />
                <path d="M12 12h.01" />
                <path d="M16 12h.01" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm ">Replied Comment</p>
              <p className="text-xs ">Fanshi updated a task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
