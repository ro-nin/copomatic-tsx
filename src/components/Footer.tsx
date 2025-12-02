import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return <div className='pb-4 pt-16 mt-12 flex w-full gap-4 uppercase justify-center bg-black text-white'>
      <a className='hover:bg-white hover:text-black px-2' href="https://emkorp.vercel.app">EMKORP 2022</a>
       <a className='hover:bg-white hover:text-black px-2' href="emailto:emkorporation@gmail.com">EMAIL ME</a>

  </div>;
};

export default Footer;
