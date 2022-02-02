import React from 'react';

type Props = {};

const Landing = (props: Props) => {
    return <div className='bgLandingGradient flex flex-col min-h-screen justify-center items-center'>
        <p className=' uppercase -rotate-6 textOutline text-7xl font-extrabold  bg-black p-4'>cop-o-matic</p>
        <p className="animate-pulse  -rotate-6 bg-red-600 p-4  text-4xl text-white font-bold">v0.1</p>

        <p className='mt-8 text-2xl font-bold text-white shadow-lg uppercase'>A Disco Elysium UNOFFICIAL character spreadsheet generator.</p>
        <p className=' text-xl font-bold  text-gray-400 uppercase'>An high concept tool for high concept people (Desktop Only). </p>
        <a href="/#stats">
            <div className=' mt-6 scroll-smooth text-3xl rounded my-2  font-extrabold  bg-black p-4 uppercase hover:bg-opacity-80'>
                <p className=' font-bold bgLandingGradientText  uppercase hover:bg-opacity-80'> Start</p>
            </div>
        </a>


        <p className=' mt-36'>All text content and artworks shown in this site are registered property of studio ZAUM, I do not own any rights.</p>

    </div>;
};

export default Landing;
