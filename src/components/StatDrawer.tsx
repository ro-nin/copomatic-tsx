import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import StatRow from './StatRow';
import { CgShapeRhombus } from 'react-icons/cg'
import { copType_enum, soulVastness_enum } from '../utils/Utils';


interface statDrawerProps {
    intellect: number,
    psyche: number,
    physique: number,
    motorics: number,
    decrementStat: Function,
    incrementStat: Function,
    availableStatPoints: number,
    handleCharNameInputChange: ChangeEventHandler<HTMLInputElement>,
    goToSkillDrawer: MouseEventHandler<HTMLButtonElement>,
    handleCopTypeInputChange: ChangeEventHandler<HTMLSelectElement>,
    handleSoulVastnessInputChange: ChangeEventHandler<HTMLSelectElement>,
};



const StatDrawer = (props: statDrawerProps) => {


    const statValueToLabel = new Map()
    statValueToLabel.set(1, "terrible")
    statValueToLabel.set(2, "weak")
    statValueToLabel.set(3, "average")
    statValueToLabel.set(4, "good")
    statValueToLabel.set(5, "great")
    statValueToLabel.set(6, "genius")

    let throwawayindex = 0;

    return <div id="stats" className='flex flex-col mx-[400px] mt-4 gap-2 justify-center items-center  scroll-smooth'>

        <h1 className='text-5xl text-center bg-white text-black px-2'>ATTRIBUTES</h1>

        <div className='mx-auto text-xl flex justify-center itemps-center gap-2 max-w-lg p-6 text-white'>

            <p className=''>Available Points: </p>

            {Array.from(Array(props.availableStatPoints)).map(() => <CgShapeRhombus key={throwawayindex++} />)}
        </div>

        <StatRow
            stat={"intellect"}
            statId={0}
            incrementStat={props.incrementStat} decrementStat={props.decrementStat}
            value={props.intellect}
            statLabel={statValueToLabel.get(props.intellect)}
            statDesc={"Raw brain power, how smart you are"} />

        <StatRow value={props.psyche}
            stat={"psyche"}
            statId={1}
            incrementStat={props.incrementStat} decrementStat={props.decrementStat}
            statLabel={statValueToLabel.get(props.psyche)}
            statDesc={"Sensitivity, how emotionally intelligent you are. Your power to influence yourself and others. "} />

        <StatRow value={props.physique}
            stat={"physique"}
            statId={2}
            incrementStat={props.incrementStat} decrementStat={props.decrementStat}
            statLabel={statValueToLabel.get(props.physique)}
            statDesc={"Your musculature, how strong you are. How well your body is built."} />

        <StatRow value={props.motorics}
            stat={"motorics"}
            statId={3}
            incrementStat={props.incrementStat} decrementStat={props.decrementStat}
            statLabel={statValueToLabel.get(props.motorics)}
            statDesc={"Your senses, how agile you are. How well you move your body. "} />


        <div className="flex  gap-4 pt-4">

            <div className="mb-3 pt-0">
                <input type="text" name="charName" onChange={props.handleCharNameInputChange} placeholder="Character Name" className=" focus:ring-black px-3 py-3  placeholder-neutral-300 text-white relative bg-black bg-opacity-30 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring " />
            </div>

            <div className="relative inline-block w-full text-gray-700  hover:cursor-pointer">
                <select name="soulVastness" onChange={props.handleSoulVastnessInputChange} className="hover:cursor-pointer  appearance-none focus:ring-black px-3 py-3  placeholder-neutral-300 text-white relative bg-black bg-opacity-80 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" placeholder="Regular input">
                    <option>{soulVastness_enum.immense}</option>
                    <option>{soulVastness_enum.puny}</option>
                    <option>{soulVastness_enum.modest}</option>
                    <option>{soulVastness_enum.hangover}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
            </div>

            <div className="relative inline-block w-full text-gray-700 hover:cursor-pointer">
                <select name="copotype" onChange={props.handleCopTypeInputChange} className=" hover:cursor-pointer  appearance-none focus:ring-black px-3 py-3  placeholder-neutral-300 text-white relative bg-black bg-opacity-80 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" placeholder="Regular input">
                    <option>{copType_enum.apocal}</option>
                    <option>{copType_enum.boring}</option>
                    <option>{copType_enum.fancy}</option>
                    <option>{copType_enum.hobo}</option>
                    <option>{copType_enum.sorry}</option>
                    <option>{copType_enum.supers}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        <button onClick={props.goToSkillDrawer} className='scroll-smooth text-2xl rounded my-2 text-white bg-black p-4 uppercase hover:bg-opacity-80'> Go To Skills</button>
    </div>;
};

export default StatDrawer;
