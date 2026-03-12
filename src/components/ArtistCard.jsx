import React from 'react';
import { Link } from 'react-router';

const ArtistCard = ({ art }) => {

    const { artistEmail, artistName, artistPhoto } = art;

    return (
        <div className="bg-base-100 border border-base-300 p-8 rounded-3xl flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-lg transition">

            <img
                className="h-20 w-20 rounded-full object-cover"
                src={artistPhoto}
                alt={artistName}
            />

            <p className="font-semibold text-base-content text-lg">
                {artistName}
            </p>

            <p className="text-sm text-base-content/70">
                {artistEmail}
            </p>

            <Link
                className="btn btn-primary btn-sm w-full mt-2 rounded-full"
            >
                View Profile
            </Link>

        </div>
    );
};

export default ArtistCard;