import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error-404.png"; 

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-6">

            {/* Image */}
            <img
                src={errorImg}
                alt="404 Error"
                className="w-72 md:w-96 mb-6"
            />

            <h2 className="text-2xl text-red-700 font-semibold">
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