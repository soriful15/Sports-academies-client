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
import InstructorsRoutes from './InstructorsRoutes';
import AdminRoutes from './AdminRoutes';
import MangeClasses from '../Page/MangeClasses/MangeClasses';
import MyClass from '../Page/MyClass/MyClass';
import UpdatedClass from '../Page/Updated/UpdatedClass';


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
      },

    ]

  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'addClasses',
        element:<InstructorsRoutes><AddClass></AddClass></InstructorsRoutes>
      },
      {
        path:'mangeUsers',
        element: <AdminRoutes><MangeUsers></MangeUsers></AdminRoutes>
      },
      {
        path:'mangeClasses',
        element: <AdminRoutes><MangeClasses></MangeClasses></AdminRoutes>
      },
      {
        path:'myClass',
        element: <InstructorsRoutes><MyClass></MyClass></InstructorsRoutes>
      },
      {
        path: 'updated/:id',
        element: <InstructorsRoutes><UpdatedClass></UpdatedClass></InstructorsRoutes>,
        loader:({params})=>fetch(`http://localhost:4000/allClasses/${params.id}`)
      },
     
    ]
  },

]);

export default router;