import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { copType_enum, soulVastness_enum } from '../utils/Utils';
import { Glasses, Gloves, Hats, Jackets, Neckwear, Pants, Shirts, Shoes } from "../data/Clothes_Data";

export const useCharacterState = () => {
    // Character Details
    const [charName, setCharName] = useState("Harrier Kitsuragi");
    const [copType, setCopType] = useState(copType_enum.apocal);
    const [soulVastness, setSoulVastness] = useState(soulVastness_enum.immense);

    // Stats
    const [intellect, setIntellect] = useState(1);
    const [psyche, setPsyche] = useState(1);
    const [physique, setPhysique] = useState(1);
    const [motorics, setMotorics] = useState(1);
    const [availableStatPoints, setAvailableStatPoints] = useState(8);

    // Clothing Indices
    const [hatIndex, setHatIndex] = useState(0);
    const [glassesIndex, setGlassesIndex] = useState(0);
    const [jacketIndex, setjacketIndex] = useState(0);
    const [neckwearIndex, setneckwearIndex] = useState(0);
    const [shirtIndex, setshirtIndex] = useState(0);
    const [pantsIndex, setpantsIndex] = useState(0);
    const [glovesIndex, setglovesIndex] = useState(0);
    const [shoesIndex, setshoesIndex] = useState(0);

    // Equipped Items
    const [equipped, setEquipped] = useState({
        hat: Hats[hatIndex],
        glasses: Glasses[glassesIndex],
        jacket: Jackets[jacketIndex],
        neckwear: Neckwear[neckwearIndex],
        shirt: Shirts[shirtIndex],
        gloves: Gloves[glovesIndex],
        pants: Pants[pantsIndex],
        shoes: Shoes[shoesIndex]
    });

    // Update equipped items when indices change
    useEffect(() => setEquipped(prev => ({ ...prev, hat: Hats[hatIndex] })), [hatIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, glasses: Glasses[glassesIndex] })), [glassesIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, jacket: Jackets[jacketIndex] })), [jacketIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, neckwear: Neckwear[neckwearIndex] })), [neckwearIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, shirt: Shirts[shirtIndex] })), [shirtIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, pants: Pants[pantsIndex] })), [pantsIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, gloves: Gloves[glovesIndex] })), [glovesIndex]);
    useEffect(() => setEquipped(prev => ({ ...prev, shoes: Shoes[shoesIndex] })), [shoesIndex]);

    // Handlers
    function handleCharNameInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setCharName(value);
    }

    function handleCopTypeInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setCopType(value);
    }

    function handleSoulVastnessInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setSoulVastness(value);
    }

    function nextClothingItem(direction: number, clothingLayer: number) {
        let newIndex;
        switch (clothingLayer) {
            case 0:
                newIndex = direction > 0 ? (hatIndex + 1) % Hats.length : (hatIndex - 1);
                if (newIndex < 0) newIndex = Hats.length - 1;
                setHatIndex(newIndex);
                break;
            case 1:
                newIndex = direction > 0 ? (glassesIndex + 1) % Glasses.length : (glassesIndex - 1);
                if (newIndex < 0) newIndex = Glasses.length - 1;
                setGlassesIndex(newIndex);
                break;
            case 3:
                newIndex = direction > 0 ? (jacketIndex + 1) % Jackets.length : (jacketIndex - 1);
                if (newIndex < 0) newIndex = Jackets.length - 1;
                setjacketIndex(newIndex);
                break;
            case 2:
                newIndex = direction > 0 ? (neckwearIndex + 1) % Neckwear.length : (neckwearIndex - 1);
                if (newIndex < 0) newIndex = Neckwear.length - 1;
                setneckwearIndex(newIndex);
                break;
            case 4:
                newIndex = direction > 0 ? (shirtIndex + 1) % Shirts.length : (shirtIndex - 1);
                if (newIndex < 0) newIndex = Shirts.length - 1;
                setshirtIndex(newIndex);
                break;
            case 5:
                newIndex = direction > 0 ? (pantsIndex + 1) % Pants.length : (pantsIndex - 1);
                if (newIndex < 0) newIndex = Pants.length - 1;
                setpantsIndex(newIndex);
                break;
            case 6:
                newIndex = direction > 0 ? (glovesIndex + 1) % Gloves.length : (glovesIndex - 1);
                if (newIndex < 0) newIndex = Gloves.length - 1;
                setglovesIndex(newIndex);
                break;
            case 7:
                newIndex = direction > 0 ? (shoesIndex + 1) % Shoes.length : (shoesIndex - 1);
                if (newIndex < 0) newIndex = Shoes.length - 1;
                setshoesIndex(newIndex);
                break;
            default:
                return;
        }
    }

    function idToStatState(statId: number): { state: number, setState: Dispatch<SetStateAction<number>> } {
        switch (statId) {
            case 0: return { state: intellect, setState: setIntellect };
            case 1: return { state: psyche, setState: setPsyche };
            case 2: return { state: physique, setState: setPhysique };
            case 3: return { state: motorics, setState: setMotorics };
            default: return { state: intellect, setState: setIntellect };
        }
    }

    function incrementStat(id: number, points: number = 1) {
        if (availableStatPoints > 0) {
            const { state, setState } = idToStatState(id);
            if (state < 6) {
                setState(state + points);
                setAvailableStatPoints(availableStatPoints - points);
            }
        }
    }

    function decrementStat(id: number, points: number = 1) {
        const { state, setState } = idToStatState(id);
        if (state > 1) {
            setState(state - points);
            setAvailableStatPoints(availableStatPoints + points);
        }
    }

    return {
        charName,
        copType,
        soulVastness,
        intellect,
        psyche,
        physique,
        motorics,
        availableStatPoints,
        equipped,
        handleCharNameInputChange,
        handleCopTypeInputChange,
        handleSoulVastnessInputChange,
        nextClothingItem,
        incrementStat,
        decrementStat
    };
};
