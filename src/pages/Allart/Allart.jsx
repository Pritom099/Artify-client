import React from 'react';
import { useLoaderData } from 'react-router';
import ArtCard from '../../components/ArtCard';
import { useState } from 'react';

const Allart = () => {
    const data = useLoaderData();
    const [artwork, setArtwork] = useState(data)
    const [loading, setLoading] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault();
        const search_text = e.target.search.value;
        console.log(search_text)
        setLoading(true)

        fetch(`https://artify-server-weld.vercel.app/search?search=${search_text}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArtwork(data)
                setLoading(false)
            })
    }

    if (loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }

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

            <form onSubmit={handleSearch} className="flex justify-center gap-2 mt-10 mb-10">
                <label className="input rounded-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input name="search" type="search" placeholder="Search" />
                </label>
                <button className="btn btn-secondary ">{loading ? "Searching...." : "Search"}</button>
            </form>

            {/* Art Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    artwork.length === 0 && !loading ? (
                        <div className="col-span-3 text-center py-10 space-y-5">

                            <h2 className="text-5xl font-bold text-red-500">
                                No Artwork Found
                            </h2>
                            <button
                                onClick={() => setArtwork(data)}
                                className="btn btn-secondary"
                            >
                                Back to All Artworks
                            </button>

                        </div>
                    ) : (
                        artwork.map((art) => (
                            <ArtCard key={art._id} art={art} />
                        ))
                    )
                }
            </div>

        </div>
    );
};

export default Allart;