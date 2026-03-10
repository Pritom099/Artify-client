import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Allart from "../pages/Allart/Allart";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Addart from "../pages/Addart/Addart";
import ArtDetails from "../pages/ArtDetails/ArtDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>fetch('http://localhost:3000/latest-artworks')
            },
            {
                path: "/all-art",
                element: <Allart></Allart>,
                loader: () => fetch('http://localhost:3000/artworks')
            },
            {
                path: "/add-art",
                element: <Addart></Addart>
            },
            {
                path: "/art-details/:id",
                element: <ArtDetails></ArtDetails>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ],
    },
]); 