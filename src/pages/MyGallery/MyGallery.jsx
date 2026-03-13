import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import ArtCard from '../../components/ArtCard';

const MyGallery = () => {
    const { user } = use(AuthContext)
    const [artwork, setArtwork] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/my-gallery?email=${user.email}`, {
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
        <div className='p-15'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    artwork.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default MyGallery;