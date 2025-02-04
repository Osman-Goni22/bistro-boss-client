import {
    createBrowserRouter,
   
  } from "react-router-dom";
  
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../hooks/Dashboard";
import Cart from "../Pages/DashBoard/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "../Components/AdminRoute/AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import SSLCommerz from "../Components/SSLCommerz";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<OrderFood></OrderFood>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
       {
         path:'cart',
         element:<Cart></Cart>
       },
       {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
       }
       ,{
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
       },
       {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
       },
       {
        path:'updateItem/:id',
        element:<UpdateItem></UpdateItem>

       },
       {
        path:'payment',
        element:<Payment></Payment>
       },
       {
        path:'ssl',
        element:<SSLCommerz></SSLCommerz>

       }
       
      ]
    }
  ]);