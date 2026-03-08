import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Allart from "../pages/Allart/Allart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/all-art",
            element: <Allart></Allart>
        },
    ]
  },
]); 