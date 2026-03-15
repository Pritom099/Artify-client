import React from "react";
import { Link } from "react-router";

const ArtCard = ({ art }) => {
    const { image, title, category, artistName, artistPhoto, likes, price } = art;
    const id = art.artworkId || art._id;

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

            {/* Image */}
            <figure className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </figure>

            <div className="p-6 space-y-4">

                {/* Title */}
                <h2 className="text-xl font-semibold text-base-content">
                    {title}
                </h2>

                {/* Artist */}
                <div className="flex items-center gap-2">
                    <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={artistPhoto}
                        alt={artistName}
                    />
                    <p className="text-sm font-medium text-base-content/80">
                        {artistName}
                    </p>
                </div>

                {/* Category */}
                <div className="border-t border-base-300 pt-3">
                    <p className="text-sm text-base-content/70">
                        {category}
                    </p>
                </div>

                {/* Likes + Price */}
                <div className="flex justify-between items-center mt-3">
                    <p className="text-sm font-semibold text-error">
                        ❤️ {likes}
                    </p>

                    <p className="text-lg font-bold text-success">
                        ${price}
                    </p>
                </div>

                {/* Button */}
                <div className="card-actions mt-3">
                    <Link
                        to={`/art-details/${id}`}
                        className="btn btn-primary btn-sm w-full rounded-full"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ArtCard;