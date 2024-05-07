import {
    createBrowserRouter,

  } from "react-router-dom";

import Home from "../page/Home/Home";
import Main from "../Layout/Main/Main";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },  
  ]},
 
 
]);