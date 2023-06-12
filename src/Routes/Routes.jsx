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
import MySelectClass from '../Page/Dashboard/MySelectClass/MySelectClass';
import Payments from '../Page/Dashboard/Payment/Payments';
import EnrollClass from '../Page/Dashboard/EnrollClass/EnrollClass';
import PaymentHistory from '../Page/Dashboard/PaymentHistory/PaymentHistory';


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
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },

    ]

  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'addClasses',
        element: <InstructorsRoutes><AddClass></AddClass></InstructorsRoutes>
      },
      {
        path: 'mangeUsers',
        element: <AdminRoutes><MangeUsers></MangeUsers></AdminRoutes>
      },
      {
        path: 'mangeClasses',
        element: <AdminRoutes><MangeClasses></MangeClasses></AdminRoutes>
      },
      {
        path: 'myClass',
        element: <InstructorsRoutes><MyClass></MyClass></InstructorsRoutes>
      },
      {
        path: 'allClasses/:id',
        // element: <InstructorsRoutes><UpdatedClass></UpdatedClass></InstructorsRoutes>,
        element: <UpdatedClass></UpdatedClass>,
        loader: ({ params }) => fetch(`http://localhost:4000/allClasses/${params.id}`)
      },
      {
        path: 'mySelectedClass',
        element: <MySelectClass></MySelectClass>
      },
      {
        path: 'enrollClass',
        element: <EnrollClass></EnrollClass>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'Payments/:id',
        element:<Payments></Payments>,
        loader:({params})=>fetch(`http://localhost:4000/carts/${params.id}`)
      },

    ]
  },

]);

export default router;