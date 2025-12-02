import React from 'react';

type Props = {};

const About = (props: Props) => {
    return <div className='flex flex-col min-h-screen max-h-screen gap-6 text-white justify-right  items-end mr-4 '>
        <h1 className=' text-8xl text-center bg-black px-5 py-2 m-4'>WHY COP-O-MATIC</h1>
        <p className=' text-xl text-center'>
            An unofficial character/spreadsheet generator for the RPG system as seen (kind of) in the acclaimed Disco Elysium by Studio ZA/UM.</p>

        <div className='overflow-y-scroll text-lg  font-semibold text-gray-500   max-w-2xl bg-black bg-opacity-50 border-l-[24px] border-r-[24px] border-stone-600 px-6'>
            <p className=' font-bold text-lg text-left  inline uppercase text-cyan-500 '> Drama</p>
            <p className=' font-bold text-lg text-left ml-1 inline'>[Normal: Success] -</p>
            <p className=' text-base text-left inline  '> Do you consider yourself a HIGH CONCEPT individual? If the answer to this extremely dense question is YES, oh well you just found the HIGH CONCEPT toolkit for your everyday HIGH CONCEPT necessities. Whether you are listing your own soft, medium, hard, or VERY HARD skills in your resume for that fancy big-cash corporate job you’re aiming for, or just trying to forge a new identity after a dissociative alcohol-induced manic episode, COP-O-MATIC is that HIGH CONCEPT instrument that will serve your very special needs.
                Among the endless possibilities and philosophical implications bundling with COP-O-MATIC, you’ll be able to:</p>
            <ul className='text-base list-disc mt-2 text-left ml-12'>
                <li>   Choose your own NAME? NAME... what a concept.</li>
                <li>	Choose your Attributes and Skills, style and even the size of your SOUL, if you have one of course.</li>
                <li>	Express yourself with a range of fashionable clothes and see how does that affects your identity.</li>
                <li>	Save your new self as a digital image for everyone to see.</li>
            </ul>
            <p className='mb-6 text-base text-left'>Mobile responsive design you ask? What kind of LOW CONCEPT request is that?</p>
            <p className='pt-8 font-bold text-lg text-left  inline uppercase  text-yellow-500 '> Interfacing</p>
            <p className=' font-bold text-lg text-left ml-1 inline'>[Easy: Success] -</p>
            <p className=' text-base text-left inline text-gray-300'>The code is an half mess because 1. so are we, 2. the whole thing started as an improv thing and I didn't plan to make it public, but maybe someone out there could still find some of it useful for future projects. Design is not responsive, sorry (Sorry Cop +1). Update/bug-fixes may come but probably won't since who cares (Apocalypse Cop +1).
            </p>

            <ol className=' my-6 py-2 text-base font-bold list-none mt-2 text-left ml-12 text-[#d7431b]'>
                <li className=' hover:text-white '>
                    <a href="/">
                        <p className='text-white inline'>1.</p>
                        <p className='ml-2 inline'>Return HOME, you deserve it.</p>
                    </a>
                </li>
                <li className='bg-[#d7431b] hover:text-white text-stone-900'>
                    <a href="https://github.com/ro-nin/copomatic-tsx">
                        <p className='inline text-black'>2.</p>
                        <p className='ml-2 inline   '>[Volition: Hard]: Sail to the oceanic web of spaghetti and regrets (Go to the source code).</p>
                    </a>
                </li>
            </ol>
        </div>




    </div >;
};

export default About;
