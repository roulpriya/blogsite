import React from 'react'

const About = () => {
    return (<div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
                <div className="pd-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-20">
                    Hi I am Priyambada Roul, working as a software engineer at Baton Systems. I have nearly to years of
                    experience in software development
                    I am proficient in Java, Springboot, React, SQL. I write technical blogs and my hobby is to dance
                    and read non-fictional books
                </p>

                <br/>

                <p className="text-xl">
                    Apart from this I am open to other oppotunities. I have contributed in opensource projects like
                    opensearch.
                </p>
            </div>
        </div>
    );
};

export default About