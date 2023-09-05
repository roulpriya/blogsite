import React from 'react'
import ConstructorInjection from '../assets/portfolio/ConstructorInjection.jpg';
import Schedulers from '../assets/portfolio/Schedulers.jpg';
import Strings from '../assets/portfolio/Strings.jpg';
import mindspace from '../assets/portfolio/mindspace.jpg';


const Portfolio = () => {

    const articles = [
        {
            id: 1,
            src: ConstructorInjection,
            title: "Constructor Injection in Java",
            style: "shadow-white",
            href: "https://medium.com/@priyaroul99/what-is-constructor-injection-and-why-should-you-use-it-in-spring-bdb3e1857c58?source=user_profile---------0----------------------------"

        },
        {
            id: 2,
            src: Schedulers,
            title: "Schedulers in Java",
            style: "shadow-white",
            href: "https://medium.com/@priyaroul99/lets-talk-about-schedulers-in-java-d6ba3004de7c?source=user_profile---------2----------------------------"
        },
        {
            id: 3,
            src: Strings,
            title: "Strings in Java",
            style: "shadow-white",
            href: "https://medium.com/@priyaroul99/strings-in-java-d036224551fa?source=user_profile---------4----------------------------"

        },
        {
            id: 4,
            src: mindspace,
            title: "Roller Coaster Ride",
            style: "shadow-white",
            href: "https://medium.com/@priyaroul99/my-2022-roller-coaster-ride-306deb47083d?source=user_profile---------3----------------------------"

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
                        articles.map(({id, src, title, style, href}) => (

                            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${style}`}>
                                <img src={src}
                                     alt=""
                                     className="rounded-md duration-200 hover:scale-105"
                                />
                                <div>
                                    <a
                                        href={href}
                                    >
                                        <p className="mt-4">{title}</p>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center">

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
};

export default Portfolio;