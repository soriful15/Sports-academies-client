import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../LayOut/Main';
import ErrorPage from '../LayOut/ErrorPage';
import Home from '../Page/Home/Home/Home';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import Dashboard from '../Page/Dashboard/Dashboard';
import Instructors from '../Page/Instructors/Instructors';
import AddClass from '../Page/Dashboard/AddClass/AddClass';

import PrivateRoute from '../Routes/PrivateRoute'
import MangeUsers from '../Page/Dashboard/MangeUsers/MangeUsers';
import Classes from '../Page/Classess/classes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'/classes',
        element: <Classes></Classes>
      }

    ]

  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'addClasses',
        element:<AddClass></AddClass>
      },
      {
        path:'mangeUsers',
        element:<MangeUsers></MangeUsers>
      }
    ]
  },

]);

export default router;