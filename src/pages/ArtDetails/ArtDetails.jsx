import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import Swal from "sweetalert2";

const ArtDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const hasViewed = useRef(false);

    const [artwork, setArtwork] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/artworks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArtwork(data);
            });
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/artworks/${artwork._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': "application/json",
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate('/all-art')
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your art has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });
    }

    useEffect(() => {
        if (!hasViewed.current) {
            fetch(`http://localhost:3000/artworks/view/${id}`, {
                method: "PATCH"
            });

            hasViewed.current = true;
        }

        fetch(`http://localhost:3000/artworks/${id}`)
            .then(res => res.json())
            .then(data => setArtwork(data));

    }, [id]);


    const handleLike = () => {
        fetch(`http://localhost:3000/artworks/like/${artwork._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(() => {
                setArtwork({
                    ...artwork,
                    likes: artwork.likes + 1
                });
            });
        setIsLiked(!isLiked);
    };


    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen">

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Image */}
                    <div className="lg:col-span-2">

                        <div className="aspect-square rounded-lg overflow-hidden mb-6">
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-3 gap-4">

                            <button
                                onClick={handleLike}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition
                                ${isLiked
                                        ? "bg-red-500 text-white"
                                        : "border hover:bg-gray-100"
                                    }`}
                            >
                                <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
                                {isLiked ? "Liked" : "Like"}
                            </button>

                            <button
                                onClick={handleFavorite}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition
                ${isFavorited
                                        ? "bg-blue-600 text-white"
                                        : "border hover:bg-gray-100"
                                    }`}
                            >
                                <Heart className="w-5 h-5" fill={isFavorited ? "currentColor" : "none"} />
                                {isFavorited ? "Favorited" : "Favorite"}
                            </button>

                            <button
                                onClick={handleShare}
                                className="flex items-center justify-center gap-2 px-4 py-3 border rounded-lg font-medium hover:bg-gray-100"
                            >
                                <Share2 className="w-5 h-5" />
                                {copied ? "Copied!" : "Share"}
                            </button>

                        </div>

                    </div>

                    {/* Info Panel */}
                    <div className="space-y-6">

                        {/* Title */}
                        <div>
                            <h1 className="text-3xl dark:text-blue-800  font-bold mb-3">
                                {artwork.title}
                            </h1>

                            <div className="flex items-center gap-3 pb-4 border-b border-gray-300">

                                <img
                                    src={artwork.artistPhoto}
                                    alt={artwork.artistName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="dark:text-blue-800  font-semibold">{artwork.artistName}</p>
                                    <p className="text-sm text-gray-500">Artist</p>
                                </div>

                            </div>
                        </div>

                        {/* Stats */}
                        <div className="border border-gray-300 rounded-lg p-6 space-y-4 bg-white">

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Total Loves</p>
                                <p className="text-2xl font-bold text-blue-600">
                                    {artwork.likes}
                                </p>
                            </div>

                            <div className="border-t border-gray-300 pt-4">
                                <p className="text-sm text-gray-500 mb-1">Views</p>
                                <p className="text-2xl dark:text-blue-800  font-bold text-foreground">
                                    {artwork.views}
                                </p>
                            </div>

                        </div>

                        {/* Details */}
                        <div className="border border-gray-300 rounded-lg p-6 space-y-4 bg-white">

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Category</p>
                                <p className="font-semibold dark:text-blue-800 ">{artwork.category}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Medium</p>
                                <p className="font-semibold dark:text-blue-800 ">{artwork.medium}</p>
                            </div>

                            {artwork.dimensions && (
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Dimensions</p>
                                    <p className="font-semibold dark:text-blue-800 ">{artwork.dimensions}</p>
                                </div>
                            )}

                            {artwork.price && (
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Price</p>
                                    <p className="text-xl font-bold text-green-600">
                                        ${artwork.price}
                                    </p>
                                </div>
                            )}

                        </div>

                        {/* CTA */}
                        <div className="flex gap-4">
                            <Link to={`/update-art/${artwork._id}`} className="w-1/2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-center">
                                Update
                            </Link>

                            <button
                                onClick={handleDelete}
                                className="w-1/2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                            >
                                Delete
                            </button>
                        </div>


                    </div>
                </div>

                {/* Description */}
                <div className="mt-12 border-t border-gray-300 pt-12">
                    <h2 className="text-2xl dark:text-blue-800  font-bold mb-4">
                        About This Artwork
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        {artwork.description}
                    </p>
                </div>
                <div className="my-8 text-gray-400">
                    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </div>

                <div className="bg-base-100 p-10 mt-5 border border-gray-300 rounded-3xl">
                    <div className="flex items-center gap-10">
                        <div>
                            <img className="h-30 rounded-full" src={artwork.artistPhoto} alt="" />
                        </div>
                        <div className="space-y-3">
                            <p className="font-bold text-2xl">{artwork.artistName}</p>
                            <p>Professional Artist</p>
                            <div>
                                <button className="btn mr-5">View Profile</button>
                                <button className="btn">Follow</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-lg text-gray-500">Check out more amazing artworks from {artwork.artistName} and connect with them directly through the Artify platform.</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ArtDetails;