import React from 'react';
import { CgShapeRhombus } from 'react-icons/cg'
import { IconContext } from "react-icons";
 

//TODO should be called Ability or Attribute (game and wiki differs)
interface StatProps {
    value?: number,
    label?: string,
    desc?: string,

};

const Stat = (props: StatProps) => {
    const { value, label, desc } = props;
    let throwawayindex = 0;

    return <div className='bg-black bg-opacity-[95%] min-w-[200px] max-w-[300px] flex flex-col justify-end items-center'>
        <div className=" text-white text-center">
            <p className=' text-8xl'>{value}</p>
            <div className='flex justify-center itemps-center '>
                <IconContext.Provider value={{ className: "rhombusFill", style: { fill: "white" } }}>

                    {Array.from(Array(props.value)).map(() => <CgShapeRhombus key={throwawayindex++} />)}
                </IconContext.Provider>

            </div>
            <p className='uppercase  text-3xl'>{label}</p>
        </div>
    </div>;
};

export default Stat;
