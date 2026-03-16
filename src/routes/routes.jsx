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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://artify-server-eosin.vercel.app/latest-artworks')
            },
            {
                path: "/all-art",
                element: <Allart></Allart>,
                loader: () => fetch('https://artify-server-eosin.vercel.app/artworks')
            },
            {
                path: "/add-art",
                element: (
                    <PrivateRoute>
                        <Addart></Addart>
                    </PrivateRoute>
                ),
            },
            {
                path: "/art-details/:id",
                element: (
                    <PrivateRoute>
                        <ArtDetails></ArtDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-gallery',
                element: (
                    <PrivateRoute>
                        <MyGallery></MyGallery>
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-favourites',
                element: (
                    <PrivateRoute>
                        <MyFavourites></MyFavourites>
                    </PrivateRoute>
                ),
            },
            {
                path: '/update-art/:id',
                element: (
                    <PrivateRoute>
                        <UpdateArt></UpdateArt>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://artify-server-eosin.vercel.app/artworks/${params.id}`)
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