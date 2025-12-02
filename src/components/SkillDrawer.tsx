

import EquipmentItem from './EquipmentItem';
import conceptualization from '../images/intellect/conceptualization.jpg';
import drama from '../images/intellect/drama.jpg';
import encyclopedia from '../images/intellect/encyclopedia.jpg';
import logic from '../images/intellect/logic.jpg';
import rhetoric from '../images/intellect/rhetoric.jpg';
import visualcalculus from '../images/intellect/visualcalculus.jpg';

import composure from '../images/motorics/composure.jpg';
import handeyecoordination from '../images/motorics/hand-eyecoordination.jpg';
import interfacing from '../images/motorics/interfacing.jpg';
import perception from '../images/motorics/perception.jpg';
import reactionspeed from '../images/motorics/reactionspeed.jpg';
import savoirfaire from '../images/motorics/savoirfaire.jpg';

import electrochemistry from '../images/physique/electrochemistry.jpg';
import endurance from '../images/physique/endurance.jpg';
import halflight from '../images/physique/halflight.jpg';
import painthreshold from '../images/physique/painthreshold.jpg';
import physicalinstrument from '../images/physique/physicalinstrument.jpg';
import shivers from '../images/physique/shivers.jpg';

import authority from '../images/psyche/authority.jpg';
import empathy from '../images/psyche/empathy.jpg';
import espritdecorps from '../images/psyche/espritdecorps.jpg';
import inlandempire from '../images/psyche/inlandempire.jpg';
import suggestion from '../images/psyche/suggestion.jpg';
import volition from '../images/psyche/volition.jpg';
import Skill from './Skill';
import Stat from './Stat';

import { Equipment, Skills_Desc_enum, Skills_enum } from "../utils/Utils"

//TODO skill should have its own model object with desc,full name...

function computeClothesBonus(skill: Skills_enum, equipped: Equipment,) {

    const allEquipment = [equipped.hat, equipped.glasses, equipped.gloves, equipped.jacket, equipped.neckwear, equipped.pants, equipped.shirt, equipped.shoes]
    let tempVal = 0;
    for (const layer of allEquipment) {
        if (layer.modifiers) {
            for (const modifier of layer.modifiers) {
                if (skill === modifier.skill)
                    modifier.increment ? tempVal += modifier.value : tempVal -= modifier.value //todo useless, just add negative value, model to be changed
            }
        }
    }
    return tempVal
}


interface SkillDrawerProps {
    intellect: number,
    psyche: number,
    physique: number,
    motorics: number,
    charName: String,
    copType: String,
    soulVastness: String,
    equipped: Equipment,
    nextClothingItem: Function,

}
;

const SkillDrawer = (props: SkillDrawerProps) => {


    //todo Switch to grid since unresponsive?

    return <div id="skills" className="  ">

        <div className="flex justify-center">
            <div className="flex flex-col ">
                <div className='flex flex-row text-4xl'>
                    {
                        //TODO Volition Check : Failed - sorry sorry sorry this sucks - [Sorry Cop + 5]
                    }
                    <p className='uppercase text-right bg-opacity-[90%] bg-black text-white px-5 '>{props.charName || "Harrier Kitsuragi"} </p>
                    <p className='uppercase text-right bg-opacity-[90%] bg-white text-black px-5 '>{props.copType} </p>
                    <p className='uppercase text-right bg-opacity-[90%] bg-black text-white px-5 '>with {props.soulVastness.startsWith("I") ? "an" : "a"} </p>
                    <p className='uppercase text-right bg-opacity-[90%] bg-white text-black px-5 '>{props.soulVastness}</p>
                    {/* <div className=' bg-opacity-[95%] bg-white text-black  w-full '></div> */}
                </div>
                <div className="flex border-2 border-white">
                    <div className="flex flex-col">
                        <div className="flex   ">
                            <Stat value={props.intellect} label={"intellect"} />
                            <Skill img={logic} cap={props.intellect} label={Skills_enum.sk_logic} desc={Skills_Desc_enum.sk_logic} clothesBonus={computeClothesBonus(Skills_enum.sk_logic, props.equipped)} />
                            <Skill img={encyclopedia} cap={props.intellect} label={Skills_enum.sk_encyc} desc={Skills_Desc_enum.sk_encyc} clothesBonus={computeClothesBonus(Skills_enum.sk_encyc, props.equipped)} />
                            <Skill img={rhetoric} cap={props.intellect} label={Skills_enum.sk_rheto} desc={Skills_Desc_enum.sk_rheto} clothesBonus={computeClothesBonus(Skills_enum.sk_rheto, props.equipped)} />
                            <Skill img={drama} cap={props.intellect} label={Skills_enum.sk_drama} desc={Skills_Desc_enum.sk_drama} clothesBonus={computeClothesBonus(Skills_enum.sk_drama, props.equipped)} />
                            <Skill img={conceptualization} cap={props.intellect} label={Skills_enum.sk_conce} desc={Skills_Desc_enum.sk_conce} clothesBonus={computeClothesBonus(Skills_enum.sk_conce, props.equipped)} />
                            <Skill img={visualcalculus} cap={props.intellect} label={Skills_enum.sk_visua} desc={Skills_Desc_enum.sk_visua} clothesBonus={computeClothesBonus(Skills_enum.sk_visua, props.equipped)} />
                        </div>
                        <div className="flex     ">

                            <Stat value={props.psyche} label={"psyche"} />
                            <Skill img={volition} cap={props.psyche} label={Skills_enum.sk_volit} desc={Skills_Desc_enum.sk_volit} clothesBonus={computeClothesBonus(Skills_enum.sk_volit, props.equipped)} />
                            <Skill img={inlandempire} cap={props.psyche} label={Skills_enum.sk_inlan} desc={Skills_Desc_enum.sk_inlan} clothesBonus={computeClothesBonus(Skills_enum.sk_inlan, props.equipped)} />
                            <Skill img={empathy} cap={props.psyche} label={Skills_enum.sk_empat} desc={Skills_Desc_enum.sk_empat} clothesBonus={computeClothesBonus(Skills_enum.sk_empat, props.equipped)} />
                            <Skill img={authority} cap={props.psyche} label={Skills_enum.sk_autho} desc={Skills_Desc_enum.sk_autho} clothesBonus={computeClothesBonus(Skills_enum.sk_autho, props.equipped)} />
                            <Skill img={espritdecorps} cap={props.psyche} label={Skills_enum.sk_espri} desc={Skills_Desc_enum.sk_espri} clothesBonus={computeClothesBonus(Skills_enum.sk_espri, props.equipped)} />
                            <Skill img={suggestion} cap={props.psyche} label={Skills_enum.sk_sugge} desc={Skills_Desc_enum.sk_sugge} clothesBonus={computeClothesBonus(Skills_enum.sk_sugge, props.equipped)} />

                        </div>
                        <div className="flex    ">

                            <Stat value={props.physique} label={"physique"} />
                            <Skill img={endurance} cap={props.physique} label={Skills_enum.sk_endur} desc={Skills_Desc_enum.sk_endur} clothesBonus={computeClothesBonus(Skills_enum.sk_endur, props.equipped)} />
                            <Skill img={painthreshold} cap={props.physique} label={Skills_enum.sk_paint} desc={Skills_Desc_enum.sk_paint} clothesBonus={computeClothesBonus(Skills_enum.sk_paint, props.equipped)} />
                            <Skill img={physicalinstrument} cap={props.physique} label={Skills_enum.sk_physi} desc={Skills_Desc_enum.sk_physi} clothesBonus={computeClothesBonus(Skills_enum.sk_physi, props.equipped)} />
                            <Skill img={electrochemistry} cap={props.physique} label={Skills_enum.sk_elect} desc={Skills_Desc_enum.sk_elect} clothesBonus={computeClothesBonus(Skills_enum.sk_elect, props.equipped)} />
                            <Skill img={shivers} cap={props.physique} label={Skills_enum.sk_shive} desc={Skills_Desc_enum.sk_shive} clothesBonus={computeClothesBonus(Skills_enum.sk_shive, props.equipped)} />
                            <Skill img={halflight} cap={props.physique} label={Skills_enum.sk_halfl} desc={Skills_Desc_enum.sk_halfl} clothesBonus={computeClothesBonus(Skills_enum.sk_halfl, props.equipped)} />

                        </div>
                        <div className="flex    ">

                            <Stat value={props.motorics} label={"motorics"} />
                            <Skill img={handeyecoordination} cap={props.motorics} label={Skills_enum.sk_hande} desc={Skills_Desc_enum.sk_hande} clothesBonus={computeClothesBonus(Skills_enum.sk_hande, props.equipped)} />
                            <Skill img={perception} cap={props.motorics} label={Skills_enum.sk_perce} desc={Skills_Desc_enum.sk_perce} clothesBonus={computeClothesBonus(Skills_enum.sk_perce, props.equipped)} />
                            <Skill img={reactionspeed} cap={props.motorics} label={Skills_enum.sk_react} desc={Skills_Desc_enum.sk_react} clothesBonus={computeClothesBonus(Skills_enum.sk_react, props.equipped)} />
                            <Skill img={savoirfaire} cap={props.motorics} label={Skills_enum.sk_savoi} desc={Skills_Desc_enum.sk_savoi} clothesBonus={computeClothesBonus(Skills_enum.sk_savoi, props.equipped)} />
                            <Skill img={interfacing} cap={props.motorics} label={Skills_enum.sk_inter} desc={Skills_Desc_enum.sk_inter} clothesBonus={computeClothesBonus(Skills_enum.sk_inter, props.equipped)} />
                            <Skill img={composure} cap={props.motorics} label={Skills_enum.sk_compu} desc={Skills_Desc_enum.sk_compu} clothesBonus={computeClothesBonus(Skills_enum.sk_compu, props.equipped)} />


                        </div>
                    </div>


                    <div className='flex flex-col justify-center min-w-[150px] bg-black   border-white '>
                        <p className='text-white text-center uppercase text-xl'>Equipment</p>
                        <EquipmentItem item={props.equipped.hat} nextClothingItem={props.nextClothingItem} ClothingLayer={0} />
                        <EquipmentItem item={props.equipped.glasses} nextClothingItem={props.nextClothingItem} ClothingLayer={1} />
                        <EquipmentItem item={props.equipped.neckwear} nextClothingItem={props.nextClothingItem} ClothingLayer={2} />
                        <EquipmentItem item={props.equipped.jacket} nextClothingItem={props.nextClothingItem} ClothingLayer={3} />
                        <EquipmentItem item={props.equipped.shirt} nextClothingItem={props.nextClothingItem} ClothingLayer={4} />
                        <EquipmentItem item={props.equipped.gloves} nextClothingItem={props.nextClothingItem} ClothingLayer={6} />
                        <EquipmentItem item={props.equipped.pants} nextClothingItem={props.nextClothingItem} ClothingLayer={5} />
                        <EquipmentItem item={props.equipped.shoes} nextClothingItem={props.nextClothingItem} ClothingLayer={7} />
                    </div>
                </div>
            </div>

        </div>

    </div>;
};

export default SkillDrawer;
