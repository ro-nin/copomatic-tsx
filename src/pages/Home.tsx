import React, { useState, useRef } from 'react';
import SkillDrawer from '../components/SkillDrawer';
import StatDrawer from '../components/StatDrawer';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import { useCharacterState } from '../hooks/useCharacterState';
import { useScreenshot } from '../hooks/useScreenshot';

type Props = {};

const Home = (props: Props) => {
    const [viewSkillDrawer, setViewSkillDrawer] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const {
        charName, copType, soulVastness, intellect, psyche, physique, motorics,
        availableStatPoints, equipped, handleCharNameInputChange,
        handleCopTypeInputChange, handleSoulVastnessInputChange,
        nextClothingItem, incrementStat, decrementStat
    } = useCharacterState();

    const { savePNG, saveJPG } = useScreenshot(ref);

    const goToSkillDrawer = () => setViewSkillDrawer(true);
    const goToStatDrawer = () => setViewSkillDrawer(false);

    return (
        <div>
            <Landing />
            {!viewSkillDrawer && <StatDrawer
                goToSkillDrawer={goToSkillDrawer}
                availableStatPoints={availableStatPoints}
                incrementStat={incrementStat}
                decrementStat={decrementStat}
                intellect={intellect}
                physique={physique}
                psyche={psyche}
                motorics={motorics}
                handleCharNameInputChange={handleCharNameInputChange}
                handleCopTypeInputChange={handleCopTypeInputChange}
                handleSoulVastnessInputChange={handleSoulVastnessInputChange}
            />}
            {viewSkillDrawer && <div ref={ref}>
                <SkillDrawer
                    nextClothingItem={nextClothingItem}
                    intellect={intellect}
                    physique={physique}
                    psyche={psyche}
                    motorics={motorics}
                    charName={charName}
                    copType={copType}
                    soulVastness={soulVastness}
                    equipped={equipped}
                />
            </div>}
            <div className='flex justify-center'>
                {viewSkillDrawer && <button onClick={goToStatDrawer} className="text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Revert All</button>}
                {viewSkillDrawer && <button onClick={savePNG} className="text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Save To PNG</button>}
                {viewSkillDrawer && <button onClick={saveJPG} className="text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Save To JPG</button>}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
