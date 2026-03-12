import React from 'react';
import { useLoaderData } from 'react-router';
import ArtCard from '../../components/ArtCard';

const Allart = () => {
    const data = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* Header */}
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-base-content dark:text-blue-800 mb-3">
                    Explore Artworks
                </h1>

                <p className="text-lg dark:text-blue-800  md:text-xl text-base-content/70">
                    Discover amazing artworks from talented artists around the world
                </p>
            </div>

            {/* Art Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map((art) => (
                        <ArtCard key={art._id} art={art} />
                    ))
                }
            </div>

        </div>
    );
};

export default Allart;