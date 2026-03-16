import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import ArtCard from '../../components/ArtCard';

const MyGallery = () => {
    const { user } = use(AuthContext)
    const [artwork, setArtwork] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://artify-server-weld.vercel.app/my-gallery?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setArtwork(data)
                setLoading(false)
            })
    }, [user])

    if (loading) {
        return <div>Please wait... Loading...</div>
    }

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">My Favourite Artworks</h1>

            {artwork.length === 0 ? (
                <p className="text-gray-500 font-semibold text-4xl">You have no  artworks yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {artwork.map(art => <ArtCard key={art._id} art={art}></ArtCard>)}
                </div>
            )}
        </div>
    );
};

export default MyGallery;