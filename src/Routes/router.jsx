import React from "react";
import HomeIndex from "../Page/Home/HomeIndex";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Page/Home/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <HomeIndex /> },
      { path: "/", element: <Dashboard></Dashboard> },
    ],
  },
]);

export default router;
