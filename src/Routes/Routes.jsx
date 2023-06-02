import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/UserDashboard/MyCart/MyCart";
import AllUsers from "../Pages/AdminDashboard/AllUsers/AllUsers";
import AddItem from "../Pages/AdminDashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/AdminDashboard/ManageItem/ManageItem";
import Payment from "../Pages/UserDashboard/Payment/Payment";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>

        },
        {
          path:'orderFood/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment/>
        },
        {
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem/></AdminRoute>
        },
        {
          path:'manageItem',
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
       
      ]
    }
  ]);