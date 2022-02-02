import React from 'react';
import { CgShapeRhombus } from 'react-icons/cg'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IconContext } from "react-icons";

interface skillProps {

    img: string,
    value?: number
    label?: string,
    desc?: string,
    cap: number,
    clothesBonus? : number,


}
const Skill = (props: skillProps) => {
    const { img } = props;
    let throwawayindex = 0;

    let skillValue = props.value;

    if (!skillValue) {
        skillValue = props.cap; ///TODO
    }

    if(props.clothesBonus)
        skillValue+=props.clothesBonus;


    return <div className='relative text-white overflow-hidden '>

        <div className='group absolute w-full '>
            <IconContext.Provider value={{ style: { opacity: "40%" } }}>
                <AiOutlineInfoCircle />
            </IconContext.Provider>

            <div className="hidden group-hover:inline group-hover:bg-opacity-90 absolute  bg-black p-2 z-40">
                <p className='text-sm'> {props.desc || "placeholder description"}</p>
            </div>
        </div>


        <img src={img} className=" object-cover w-full h-full max-w-[170px]" alt="" />
        <div className=' w-full   inset-x-0  text-center absolute text-white bottom-2   z-30'>
            <div className='flex justify-center col-span-4 itemps-center '>
                <IconContext.Provider value={{ className: "rhombusFill", style: { fill: "white" } }}>
                    {skillValue>0 && Array.from(Array(skillValue)).map(() => <CgShapeRhombus key={throwawayindex++} />)}
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "lightgrey" }}>
                    {props.cap > skillValue && Array.from(Array(skillValue<0? props.cap:props.cap - skillValue)).map(() => <CgShapeRhombus key={throwawayindex++} />)}
                </IconContext.Provider>

            </div>
            <div className='flex justify-center items-end'>
                <p className='uppercase drop-shadow  font-bold text-sm '>{props.label}</p>
                <p className='uppercase  text-xl  px-1   font-bold bg-white text-black'>{skillValue}</p>
            </div>
        </div>

    </div >;
};

export default Skill;
