import React from "react";
import HeroImage from '../assets/heroImage1.JPG';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text4 sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 2 years of experience building and designing software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind,, SpringBoot and GraphQL.
                    </p>

                    <div>
                        <button>
                            Portfolio
                            <span>
                        <MdOutlineKeyboardArrowRight/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src = {HeroImage} alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-1/2"/>
                </div>
            </div>
        </div>
    );
};

export default Home;