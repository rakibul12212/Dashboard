import React from 'react';
import HomeIndex from '../Page/Home/HomeIndex';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        { index: true, element: <HomeIndex/> },
       
      ],
    },
    
  ]);

export default router;