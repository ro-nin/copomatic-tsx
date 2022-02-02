import React from 'react';

interface statRowProps {
    stat: string,
    value: number,
    statLabel: string,
    statDesc: string;
    decrementStat: Function,
    incrementStat: Function,
    statId: number
}

const StatRow = (props: statRowProps) => {


    const { stat, value, statLabel, statDesc, decrementStat, incrementStat, statId } = props;
    return <div className="flex justify-around items-baseline gap-2 text-white ">
        <div className=' text-right min-w-[330px] pr-8'>
            <p className='uppercase text-5xl  '>{statLabel}</p>
        </div>

        <div className="flex">
            <button className=" text-5xl  rounded-full  bg-black text-white px-2  hover:bg-opacity-80" onClick={() => decrementStat(statId)}>
                -
            </button>
            <p className=' text-6xl pb-8'>{value}</p>
            <button className=" text-5xl   rounded-full  bg-black text-white px-2 hover:bg-opacity-80" onClick={() => incrementStat(statId)}>
                +
            </button>
        </div>


        <div className=' pl-8 flex flex-col justify-end  text-right max-w-[400px] '>
            <p className='bg-black text-white text-7xl uppercase px-2 '>{stat}</p>
            <p className='text-xl'>{statDesc}</p>
        </div>
    </div>
}

export default StatRow;