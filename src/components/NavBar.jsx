import React from "react";

const NavBar = () => {
    return  (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl font-signature ml-4">PriyaRoul</h1>
            </div>

            <ul className={"flex"}>
                <li className="px-4 cursor-pointer capitalize font-medium
                text-gray-500 hover:scale-105 duration-200">
                    Home
                </li>
                <li>About</li>
            </ul>

        </div>
    );
};

export default NavBar;