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
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }
      ]
    },
  ]);