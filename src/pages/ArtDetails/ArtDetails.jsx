import React from 'react';

const ArtDetails = () => {

        return (
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="bg-card border-b border-border py-4 sticky top-16 z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
                        <button
                            
                            className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Explore
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Image */}
                        <div className="lg:col-span-2">
                            <div className="bg-muted aspect-square rounded-lg overflow-hidden mb-6">
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-3 gap-4 mb-6">

                                <button
                                   
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${isLiked
                                            ? "bg-destructive text-destructive-foreground"
                                            : "border border-border text-foreground hover:bg-accent/10"
                                        }`}
                                >
                                    <Heart
                                        className="w-5 h-5"
                                        fill={isLiked ? "currentColor" : "none"}
                                    />
                                    {isLiked ? "Liked" : "Like"}
                                </button>

                                <button
                                    
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${isFavorited
                                            ? "bg-primary text-primary-foreground"
                                            : "border border-border text-foreground hover:bg-accent/10"
                                        }`}
                                >
                                    <Heart
                                        className="w-5 h-5"
                                        fill={isFavorited ? "currentColor" : "none"}
                                    />
                                    {isFavorited ? "Favorited" : "Favorite"}
                                </button>

                                <button
                                    
                                    className="flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent/10 transition-colors"
                                >
                                    <Share2 className="w-5 h-5" />
                                    {copied ? "Copied!" : "Share"}
                                </button>

                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="lg:col-span-1 space-y-6">

                            {/* Title & Artist */}
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-3">
                                    {artwork.title}
                                </h1>

                                <div className="flex items-center gap-3 pb-4 border-b border-border">
                                    <img
                                        src={artwork.artistImage}
                                        alt={artwork.artist}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    <div>
                                        <p className="text-foreground font-semibold">{artwork.artist}</p>
                                        <p className="text-sm text-muted-foreground">Artist</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                                <div>
                                    <p className="text-muted-foreground text-sm mb-1">Total Likes</p>
                                    <p className="text-2xl font-bold text-primary">{likes}</p>
                                </div>

                                <div className="border-t border-border pt-4">
                                    <p className="text-muted-foreground text-sm mb-1">Views</p>
                                    <p className="text-2xl font-bold text-foreground">
                                        {Math.floor(Math.random() * 1000) + 500}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="bg-card border border-border rounded-lg p-6 space-y-4">

                                <div>
                                    <p className="text-muted-foreground text-sm mb-1">Category</p>
                                    <p className="font-semibold text-foreground">{artwork.category}</p>
                                </div>

                                <div>
                                    <p className="text-muted-foreground text-sm mb-1">Medium</p>
                                    <p className="font-semibold text-foreground">{artwork.medium}</p>
                                </div>

                                {artwork.dimensions && (
                                    <div>
                                        <p className="text-muted-foreground text-sm mb-1">Dimensions</p>
                                        <p className="font-semibold text-foreground">
                                            {artwork.dimensions}
                                        </p>
                                    </div>
                                )}

                                {artwork.price && (
                                    <div>
                                        <p className="text-muted-foreground text-sm mb-1">Price</p>
                                        <p className="font-bold text-primary text-xl">
                                            ${artwork.price}
                                        </p>
                                    </div>
                                )}

                            </div>

                            {/* CTA */}
                            <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
                                Inquire About This Piece
                            </button>

                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-12 border-t border-border pt-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            About This Artwork
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {artwork.description}
                        </p>
                    </div>

                    {/* Artist Section */}
                    <div className="mt-12 border-t border-border pt-12">
                        <div className="bg-card border border-border rounded-lg p-8">

                            <div className="flex items-center gap-6 mb-6">
                                <img
                                    src={artwork.artistImage}
                                    alt={artwork.artist}
                                    className="w-24 h-24 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {artwork.artist}
                                    </h3>

                                    <p className="text-muted-foreground mb-4">
                                        Professional Artist
                                    </p>

                                    <div className="flex gap-4">
                                        <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent/10 transition-colors font-medium">
                                            View Profile
                                        </button>

                                        <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent/10 transition-colors font-medium">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p className="text-foreground">
                                Check out more amazing artworks from {artwork.artist} and connect
                                with them directly through the Artify platform.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }



export default ArtDetails;