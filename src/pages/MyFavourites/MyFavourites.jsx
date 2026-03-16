import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";
import ArtCard from "../../components/ArtCard";

const MyFavourites = () => {
    const { user } = useContext(AuthContext);
    const [favourites, setFavourites] = useState([]);

    // Fetch favourites from backend
    useEffect(() => {
        fetch(`https://artify-server-weld.vercel.app/favourites?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => setFavourites(data))
            .catch(err => console.log(err));
    }, [user]);

    // Delete favourite function
    const handleDeleteFavourite = (id) => {
        Swal.fire({
            title: "Remove from favourites?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artify-server-weld.vercel.app/favourites/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setFavourites(prev => prev.filter(fav => fav._id !== id));
                            Swal.fire("Removed!", "Artwork has been removed from favourites.", "success");
                        }
                    })
                    .catch(err => console.log(err));
            }
        });
    };


    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">My Favourite Artworks</h1>

            {favourites.length === 0 ? (
                <p className="text-gray-500 font-semibold text-4xl">You have no favourite artworks yet.</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {favourites.map((art) => (
                        <div key={art._id} className="relative">
                            <ArtCard art={art} />
                            <button
                                onClick={() => handleDeleteFavourite(art._id)}
                                className="btn bg-blue-800 mt-2 w-full text-white font-semibold rounded-xl"
                            >
                                Remove Favourite
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyFavourites;