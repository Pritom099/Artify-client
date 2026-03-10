import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-200 via-white to-purple-200 flex  justify-center'>
            <div className='text-center space-y-8 py-30'>
                <p className='text-6xl'>🎨</p>

                <h1 className='text-5xl md:text-7xl font-bold'>
                    Discover Stunning <br /> Artworks
                </h1>

                <p className='text-2xl text-gray-500'>
                    Explore the creative world of talented artists
                </p>
                <div className='mt-12'>
                    <Link to="/all-art" className='btn-secondary'>
                        Explore Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;