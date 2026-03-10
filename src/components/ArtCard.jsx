import React from "react";
import { Link } from "react-router";

const ArtCard = ({ art }) => {
    const { image, title, category, artistName, artistPhoto, likes, price , _id} = art;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                <figure className="h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </figure>

                <div className="p-8 space-y-3">

                    <h2 className="text-2xl font-semibold">{title}</h2>

                    {/* Artist */}
                    <div className="flex items-center gap-2 ">
                        <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={artistPhoto}
                            alt={artistName}
                        />
                        <p className="text-sm font-medium">{artistName}</p>
                    </div>

                    <div className="border-t border-gray-400 ">
                        <p className="mt-3 text-lg">{category}</p>
                    </div>
                    {/* Likes + Price */}
                    <div className="flex justify-between items-center w-full mt-4">
                        <p className="text-lg font-semibold text-red-700">❤️{likes}</p>
                        <p className="text-lg font-semibold text-green-600">${price}</p>
                    </div>

                    {/* Button */}
                    <div className="card-actions mt-4">
                        <Link to={`/art-details/${_id}`} className="btn w-full btn-sm rounded-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-800 text-white">
                            View Details
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArtCard;