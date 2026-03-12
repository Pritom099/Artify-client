import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Allart from "../pages/Allart/Allart";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Addart from "../pages/Addart/Addart";
import ArtDetails from "../pages/ArtDetails/ArtDetails";
import MyGallery from "../pages/MyGallery/MyGallery";
import MyFavourites from "../pages/MyFavourites/MyFavourites";
import UpdateArt from "../pages/UpdateArt/UpdateArt";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/latest-artworks')
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
                path: '/my-gallery',
                element: <MyGallery></MyGallery>
            },
            {
                path: '/my-favourites',
                element: <MyFavourites></MyFavourites>
            },
            {
                path: '/update-art/:id',
                element: <UpdateArt></UpdateArt>,
                loader: ({ params }) => fetch(`http://localhost:3000/artworks/${params.id}`)
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