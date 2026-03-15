import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-6">

            <h1 className="text-6xl font-bold text-red-500">
                404
            </h1>

            <h2 className="text-2xl font-semibold">
                Page Not Found
            </h2>

            <p className="text-gray-500">
                The page you are looking for doesn't exist.
            </p>

            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>

        </div>
    );
};

export default ErrorPage;