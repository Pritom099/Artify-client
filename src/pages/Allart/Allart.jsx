import React from 'react';
import { useLoaderData } from 'react-router';
import ArtCard from '../../components/ArtCard';

const Allart = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='my-15'>
                <h1 className='text-5xl font-bold mb-3'>Explore Artworks</h1>
                <p className='text-xl text-gray-400'>Discover amazing artworks from talented artists around the world</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
                {
                    data.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default Allart;