import React from 'react';
import { Link } from 'react-router';

const Bannerlast = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4 py-10 sm:px-10'>
                <div className='my-10'>
                    <h1 className='text-5xl font-bold'>Community Highlights</h1>
                    <p className='text-lg text-gray-500 mt-5'>Amazing achievements from our creative community</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    <div className="card-body bg-gray-300 rounded-3xl  border border-gray-400 p-10">
                        <p className='text-4xl text-blue-900 font-bold'>2,847</p>
                        <p className='font-semibold'>Total Artworks</p>
                        <p className='text-gray-700'>Beautiful pieces shared by our community</p>
                    </div>
                    <div className="card-body bg-pink-200 rounded-3xl border border-gray-400">
                        <p className='text-4xl text-pink-600 font-bold'>1,256</p>
                        <p className='font-semibold'>Active Artists</p>
                        <p className='text-gray-700'>Talented creators sharing their vision</p>
                    </div>
                    <div className="card-body bg-gray-300 rounded-3xl  border border-gray-400">
                        <p className='text-4xl text-blue-900 font-bold'>48.3K</p>
                        <p className='font-semibold'>Total Likes</p>
                        <p className='text-gray-700'>Community appreciation in action</p>
                    </div>
                </div>
            </div>
            <div className='py-16 px-5  bg-blue-900 flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-bold mb-4 text-white'>Ready to Share Your Art?</h1>
                <p className='text-xl text-gray-300 mb-8'>Join thousands of artists in our creative community today</p>
                <div>
                    <Link to={'/add-art'} className="btn px-8 py-6 rounded-lg text-lg text-blue-900 font-semibold hover:bg-amber-200">Upload Your First Work</Link>
                </div>
            </div>

        </div>
    );
};

export default Bannerlast;