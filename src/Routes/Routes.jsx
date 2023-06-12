import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../Components/Error/Error";
import About from "../pages/Home/About/About";
import Instructors from "../pages/Instractor/Instructors";
import AllClasses from "../pages/Allclasses/AllClasses";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Private from "../Components/Private";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/My_Selected_Classes/MySelectedClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";

  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        },
        {
          path:"/allClasses",
          element:<AllClasses></AllClasses>
        },
        {
          path:"/private",
          element:<PrivateRoutes><Private></Private></PrivateRoutes>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'mySelectedClass',
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },

        // admin dashboard
        
        {
          path:'allUsers',
          element:<AdminPrivateRoutes><AllUsers></AllUsers></AdminPrivateRoutes>
        },
        {
          path: 'addAClass',
          element:<AdminPrivateRoutes><AddAClass></AddAClass></AdminPrivateRoutes>
        },
        {
          path:'manageItem',
          element:<AdminPrivateRoutes><ManageItem></ManageItem></AdminPrivateRoutes>
        }
      ]
    }
  ]);