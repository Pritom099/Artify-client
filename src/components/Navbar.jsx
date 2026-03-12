import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/authContext';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { FaGear, FaUser } from 'react-icons/fa6';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    }
    const links = <>
        <li className='font-semibold'><NavLink>Home</NavLink></li>
        <li className='font-semibold'><NavLink to={"/all-art"}>Explore Artworks</NavLink></li>
        <li className='font-semibold'><NavLink to={'/add-art'}>Add Artwork</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-2xl text-blue-800">ARTIFY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-9 border-2 border-gray-300 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <div className=" pb-3 border-b border-b-gray-200">
                                <li className="text-sm font-bold">{user.displayName}</li>
                                <li className="text-xs">{user.email}</li>
                            </div>
                            <li className="mt-3">
                                <Link to={"/profile"}>
                                    <FaUser /> Profile
                                </Link>
                            </li>

                            <li>
                                <Link to={"/my-gallery"}>
                                    My Gallery
                                </Link>
                            </li>

                            <li >
                                <Link to={"/my-favourites"}>
                                    My Favourites
                                </Link>
                            </li>

                            <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox"
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle" />

                            <li>
                                <a>
                                    {" "}
                                    <FaGear /> Settings
                                </a>
                            </li>
                            <li>
                                <button onClick={signOutUser}

                                    className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                                >
                                    <IoLogOut /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className=''>
                        <Link to={"/login"} className='btn font-semibold mr-5 rounded-xl px-4 py-2'>Login</Link>
                        <Link to={"/register"} className='btn btn-primary'>Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;