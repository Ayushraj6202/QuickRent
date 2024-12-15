// Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-500 text-white py-20 w-full h-screen">
            <div className="w-full px-4 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                    Welcome to QuickRent
                </h1>
                <p className="text-lg md:text-2xl text-center mb-8">
                    Your ultimate destination for renting top-quality gadgets at unbeatable prices.
                </p>
                <button
                    onClick={() => navigate('/gadgets')}
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200">
                    Explore Rentals Now
                </button>
                <div className="p-1 mt-1 flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <Link
                            to={'/features'}
                            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 text-center"
                        >
                            Features
                        </Link>
                        <Link
                            to={'/gadgets'}
                            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 text-center"
                        >
                            Gadgets
                        </Link>
                        <Link
                            to={'/contactus'}
                            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                     <div className="w-full md:w-2/3">
                        <img
                            src="https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=612x612&w=0&k=20&c=4iwItEQ1P3lhjl350QXRl5IrgC8ufDImaoc-7_H5vVA="
                            alt="QuickRent gadgets"
                            className="rounded-lg shadow-lg max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
