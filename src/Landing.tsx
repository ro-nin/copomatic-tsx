import React from 'react';

type Props = {};

const Landing = (props: Props) => {
    return <div className='bgLandingGradient flex flex-col min-h-screen justify-center items-center'>
        <p className=' uppercase -rotate-6 textOutline text-7xl font-extrabold  bg-black p-4'>cop-o-matic</p>
        <p className="animate-pulse  -rotate-6 bg-red-600 p-4  text-4xl text-white font-bold">v0.1</p>

        <p className='mt-8 text-2xl font-bold text-white shadow-lg uppercase'>A Disco Elysium UNOFFICIAL character spreadsheet generator.</p>
        <p className=' text-xl font-bold  text-gray-400 uppercase'>An high concept tool for high concept people (Desktop Only). </p>
        <a href="/about" className=' text-xl font-bold  text-gray-400 hover:text-red-600 uppercase decoration-solid decoration-1 underline '>Read More </a>
        <a href="/#stats">
            <div className=' mt-6 scroll-smooth text-3xl rounded my-2  font-extrabold  bg-black p-4 uppercase hover:bg-opacity-80'>
                <p className=' font-bold bgLandingGradientText  uppercase hover:bg-opacity-80'> Start</p>
            </div>
        </a>
        <div className='pt-36 text-sm'>
            <p className='inline '>All text content and artworks shown in this site are registered property of studio </p> <a className='inline text-white bg-red-500' href="https://discoelysium.com/">ZAUM</a><p className='inline'>, I do not own any rights.</p>
        </div>
    </div>;
};

export default Landing;
