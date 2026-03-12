import React from 'react';
import Banner from '../../components/Banner';
import Bannerlast from '../../components/Bannerlast';
import { Link, useLoaderData } from 'react-router';
import ArtCard from '../../components/ArtCard';
import ArtistCard from '../../components/ArtistCard';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>

            <Banner />
            <div className="bg-base-200  px-4 py-12">

                <div className="mb-10 text-center md:text-left pl-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
                        Featured Artworks
                    </h1>

                    <p className="text-lg md:text-xl text-base-content/70">
                        Discover the latest and greatest creations from our talented artists
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-10">
                    {
                        data.map(art => (
                            <ArtCard key={art._id} art={art} />
                        ))
                    }
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/all-art"
                        className="btn btn-primary px-6 rounded-full"
                    >
                        View All Artworks
                    </Link>
                </div>

            </div>

            {/* Featured Artworks */}



            {/* Top Artists */}
            <div className="bg-base-200 py-16">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
                            Top Artists of the Week
                        </h1>

                        <p className="text-lg md:text-xl text-base-content/70">
                            Celebrate the amazing talents creating art this week
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            data.map(art => (
                                <ArtistCard key={art._id} art={art} />
                            ))
                        }
                    </div>

                </div>

            </div>

            <Bannerlast />

        </div>
    );
};

export default Home;