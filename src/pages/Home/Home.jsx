import React from 'react';
import Banner from '../../components/Banner';
import Bannerlast from '../../components/Bannerlast';
import { Link, useLoaderData } from 'react-router';
import ArtCard from '../../components/ArtCard';


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className=' max-w-7xl mx-auto'>
                <div className='my-10'>
                    <h1 className='text-5xl font-bold mb-3'>Featured Artworks</h1>
                    <p className='text-xl text-gray-400'>Discover the latest and greatest creations from our talented artists</p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                    {
                        data.map(art => <ArtCard key={art._id} art={art}></ArtCard>)
                    }
                </div>
                <div className='my-15 text-center'>
                    <Link to={'/all-art'} className='btn-secondary'>View ALL Artworks</Link>
                </div>
            </div>

            <div>
                
            </div>

            <Bannerlast></Bannerlast>
        </div>
    );
};

export default Home;