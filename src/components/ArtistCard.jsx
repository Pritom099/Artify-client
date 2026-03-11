import React from 'react';
import { Link } from 'react-router';

const ArtistCard = ({art}) => {
    const {artistEmail,artistName,artistPhoto} = art
    return (
        <div>
            <div className='border p-10 rounded-3xl bg-gray-100 flex flex-col items-center space-y-2'>
                <img className='h-20 w-20 rounded-full' src={artistPhoto} alt="" />
                <p className='font-semibold'>{artistName}</p>
                <p>Email: {artistEmail}</p>
                <Link className='w-full btn-primary mt-2 text-center'>View Profile</Link>
            </div>
        </div>
    );
};

export default ArtistCard;