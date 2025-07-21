import { useState } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import Navbar from './Navbar';

const Hero = () => {
    const [showForm, setShowForm] = useState(false);

    const handleQuoteClick = () => {
        setShowForm(true);
    };

    return (
        <section
            className="relative bg-cover bg-center h-screen text-white"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-20">
                <Navbar />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex justify-between items-center h-full px-6 max-w-6xl mx-auto">
                {/* Left Side: Text + Button */}
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Reliable Global Logistics,<br />
                        Powered from the UAE
                    </h1>
                    <p className="mb-6 text-lg text-[#FAFAFA] font-medium">
                        Ship. Track. Deliver — Across 190+ Countries
                    </p>
                    {!showForm && (
                        <button
                            onClick={handleQuoteClick}
                            className="flex items-center justify-center px-6 py-3 rounded-xl border-2 border-[#004E92] bg-[#004E92] text-white text-base font-medium"
                        >
                            Get a Quote
                        </button>
                    )}
                </div>

                {showForm && (
                    <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-[420px] space-y-4">
                        {/* Top Tabs */}
                        <div className="flex items-center space-x-4 border-b pb-2">
                            <span className="font-semibold text-[#004E92] border-b-2 border-[#004E92] pb-1">Air Freight</span>
                            <span className="text-gray-400 cursor-pointer">Warehousing</span>
                        </div>

                        <p className="text-sm text-gray-700 font-medium">Get Instant Air & Ocean Freight Quotes</p>

                        {/* Radio Buttons */}
                        <div className="flex gap-4 text-sm font-medium">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="freight" defaultChecked />
                                Air Freight
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="freight" />
                                Sea Freight
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="freight" />
                                Land Freight
                            </label>
                        </div>

                        {/* Country & Destination */}
                        <div className="grid grid-cols-2 gap-3">
                            <select className="w-full p-3 border rounded-md text-sm text-gray-700">
                                <option>Select Country</option>
                            </select>
                            <select className="w-full p-3 border rounded-md text-sm text-gray-700">
                                <option>Select Destination</option>
                            </select>
                        </div>

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-md text-sm"
                        />

                        {/* Email & Phone */}
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded-md text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 border rounded-md text-sm"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 border rounded-md text-sm"
                        ></textarea>

                        {/* Button */}
                        <button className="bg-[#004E92] text-white w-full py-3 rounded-md font-semibold text-sm">
                            Get Instant Quote
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
