import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-slate-600 p-5 mt-5">
      <p className="pb-5">Recent Activities</p>
      <div>
        <div className="flex items-center gap-x-5 pb-5">
          <div>
            <p className="text-xs">40 Min Ago</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 bg-pink-500 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>Task Updated</p>
              <p className="text-xs">Nikolai update a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-5 pb-5">
          <div>
            <p className="text-xs">10 Day Ago</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 bg-pink-500 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>Deal Added</p>
              <p className="text-xs">Panshi update a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-5 pb-5">
          <div>
            <p className="text-xs">40 Min Ago</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 bg-pink-500 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>Published Article</p>
              <p className="text-xs">Sonshi update a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-5 pb-5">
          <div>
            <p className="text-xs">10 Day Ago </p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 bg-pink-500 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>Dock Updated</p>
              <p className="text-xs">Monshi update a task</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-5">
          <div>
            <p className="text-xs">40 Min Ago</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 bg-pink-500 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div>
              <p>Replyed Comment</p>
              <p className="text-xs">Fanshi update a task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
