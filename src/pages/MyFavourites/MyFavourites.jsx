import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../context/authContext";
import ArtCard from "../../components/ArtCard";

const MyFavourites = () => {

    const { user } = useContext(AuthContext);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/favourites?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setFavourites(data);
            });
    }, [user.email]);

    return (
        <div className="max-w-7xl mx-auto py-10">

            <h1 className="text-3xl font-bold mb-8">
                My Favourite Artworks
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {
                    favourites.map(art => (
                        <ArtCard key={art._id} art={art}></ArtCard>
                    ))
                }

            </div>

        </div>
    );
};

export default MyFavourites;