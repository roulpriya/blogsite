import React from 'react'
import ConstructorInjection from '../assets/portfolio/ConstructorInjection.jpg';
import Schedulers from '../assets/portfolio/Schedulers.jpg';
import Strings from '../assets/portfolio/Strings.jpg';


const Portfolio = () => {

    const articles = [
        {
            id: 1,
            src: ConstructorInjection

        },
        {
            id: 2,
            src: Schedulers
        },
        {
            id: 3,
            src: Strings
        }
    ]


    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4
                     border-gray-500">
                        Technical Articles
                    </p>
                    <p className="py-6">Check out some of my work
                        here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px0">
                {
                    articles.map(({id, src}) => (

                            <div  key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src}
                                     alt=""
                                     className="rounded-md duration-200 hover:scale-105"
                                />
                                <div className="flex items-center justify-center">
                                    <button onclick="myFunction()"className="w-0.5 px-6 py-3 m-4 duration-200 hover:scale-105">Link
                                    </button>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Portfolio;