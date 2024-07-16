import React from "react";
import HomeIndex from "../Page/Home/HomeIndex";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/Ui/Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <HomeIndex /> },
      { path: "/home", element: <MainLayout></MainLayout> },
    ],
  },
]);

export default router;
