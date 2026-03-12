import React from 'react';
import { Link } from 'react-router';

const Bannerlast = () => {
    return (
        <div className="bg-base-200">

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-10">

                <div className="my-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-base-content">
                        Community Highlights
                    </h1>

                    <p className="text-lg text-base-content/70 mt-5">
                        Amazing achievements from our creative community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

                    <div className="bg-base-100 rounded-3xl border border-base-300 p-10 shadow-sm">
                        <p className="text-4xl font-bold text-primary">2,847</p>
                        <p className="font-semibold mt-2">Total Artworks</p>
                        <p className="text-base-content/70">
                            Beautiful pieces shared by our community
                        </p>
                    </div>

                    <div className="bg-base-100 rounded-3xl border border-base-300 p-10 shadow-sm">
                        <p className="text-4xl font-bold text-secondary">1,256</p>
                        <p className="font-semibold mt-2">Active Artists</p>
                        <p className="text-base-content/70">
                            Talented creators sharing their vision
                        </p>
                    </div>

                    <div className="bg-base-100 rounded-3xl border border-base-300 p-10 shadow-sm">
                        <p className="text-4xl font-bold text-accent">48.3K</p>
                        <p className="font-semibold mt-2">Total Likes</p>
                        <p className="text-base-content/70">
                            Community appreciation in action
                        </p>
                    </div>

                </div>
            </div>


            <div className="py-16 px-5 bg-primary text-primary-content flex flex-col items-center justify-center text-center">

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Ready to Share Your Art?
                </h1>

                <p className="text-lg md:text-xl opacity-80 mb-8">
                    Join thousands of artists in our creative community today
                </p>

                <Link
                    to="/add-art"
                    className="btn btn-secondary px-8 py-3 rounded-lg text-lg"
                >
                    Upload Your First Work
                </Link>

            </div>

        </div>
    );
};

export default Bannerlast;