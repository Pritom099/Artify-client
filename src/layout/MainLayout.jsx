import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <Navbar></Navbar>
                <div className="flex-grow">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;