import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../LayOut/Main';
import ErrorPage from '../LayOut/ErrorPage';
import Home from '../Page/Home/Home/Home';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
      ]

    },
  ]);

export default router;