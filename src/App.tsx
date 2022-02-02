import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { toPng, toJpeg, } from 'html-to-image';
import './App.css';
import SkillDrawer from './SkillDrawer';
import StatDrawer from './StatDrawer';
import { copType_enum, soulVastness_enum } from './Utils';
import { Glasses, Gloves, Hats, Jackets, Neckwear, Pants, Shirts, Shoes } from "./Clothes_Data";
import Landing from './Landing';
import Footer from './Footer';

function App() {


  const [viewSkillDrawer, setViewSkillDrawer] = useState(false)


  const ref = useRef<HTMLDivElement>(null)

  const [charName, setCharName] = useState("Harry Du Bois")
  const [copType, setCopType] = useState(copType_enum.apocal)
  const [soulVastness, setSoulVastness] = useState(soulVastness_enum.immense)


  const [hatIndex, setHatIndex] = useState(0)
  const [glassesIndex, setGlassesIndex] = useState(0)
  const [jacketIndex, setjacketIndex] = useState(0)
  const [neckwearIndex, setneckwearIndex] = useState(0)
  const [shirtIndex, setshirtIndex] = useState(0)
  const [pantsIndex, setpantsIndex] = useState(0)
  const [glovesIndex, setglovesIndex] = useState(0)
  const [shoesIndex, setshoesIndex] = useState(0)

  const [equipped, setEquipped] = useState({
    hat: Hats[hatIndex],
    glasses: Glasses[glassesIndex],
    jacket: Jackets[jacketIndex],
    neckwear: Neckwear[neckwearIndex],
    shirt: Shirts[shirtIndex],
    gloves: Gloves[glovesIndex],
    pants: Pants[pantsIndex],
    shoes: Shoes[shoesIndex]
  })


  function nextClothingItem(direction: number, clothingLayer: number) {
    //clothingLayer: see equipped hook state for order, es: 0 = hat, 1=glasses
    let newIndex;
    switch (clothingLayer) {
      case 0:
        newIndex = direction > 0 ? (hatIndex + 1) % Hats.length : (hatIndex - 1)
        if (newIndex < 0) {
          newIndex = Hats.length - 1;
        }
        setHatIndex(newIndex)
        break;
      case 1:
        newIndex = direction > 0 ? (glassesIndex + 1) % Glasses.length : (glassesIndex - 1)
        if (newIndex < 0) {
          newIndex = Glasses.length - 1;
        }
        setGlassesIndex(newIndex)
        break;
      case 3:
        newIndex = direction > 0 ? (jacketIndex + 1) % Jackets.length : (jacketIndex - 1)
        if (newIndex < 0) {
          newIndex = Jackets.length - 1;
        }
        setjacketIndex(newIndex)
        break;
      case 2:
        newIndex = direction > 0 ? (neckwearIndex + 1) % Neckwear.length : (neckwearIndex - 1)
        if (newIndex < 0) {
          newIndex = Neckwear.length - 1;
        }
        setneckwearIndex(newIndex)
        break;

      case 4:
        newIndex = direction > 0 ? (shirtIndex + 1) % Shirts.length : (shirtIndex - 1)
        if (newIndex < 0) {
          newIndex = Shirts.length - 1;
        }
        setshirtIndex(newIndex)
        break;
      case 5:
        newIndex = direction > 0 ? (pantsIndex + 1) % Pants.length : (pantsIndex - 1)
        if (newIndex < 0) {
          newIndex = Pants.length - 1;
        }
        setpantsIndex(newIndex)
        break;
      case 6:
        newIndex = direction > 0 ? (glovesIndex + 1) % Gloves.length : (glovesIndex - 1)
        if (newIndex < 0) {
          newIndex = Gloves.length - 1;
        }
        setglovesIndex(newIndex)
        break;
      case 7:
        newIndex = direction > 0 ? (shoesIndex + 1) % Shoes.length : (shoesIndex - 1)
        if (newIndex < 0) {
          newIndex = Shoes.length - 1;
        }
        setshoesIndex(newIndex)
        break;

      default:
        return
    }
  }

  useEffect(() => setEquipped({ ...equipped, hat: Hats[hatIndex] }), [hatIndex])
  useEffect(() => setEquipped({ ...equipped, glasses: Glasses[glassesIndex] }), [glassesIndex])
  useEffect(() => setEquipped({ ...equipped, jacket: Jackets[jacketIndex] }), [jacketIndex])
  useEffect(() => setEquipped({ ...equipped, neckwear: Neckwear[neckwearIndex] }), [neckwearIndex])
  useEffect(() => setEquipped({ ...equipped, shirt: Shirts[shirtIndex] }), [shirtIndex])
  useEffect(() => setEquipped({ ...equipped, pants: Pants[pantsIndex] }), [pantsIndex])
  useEffect(() => setEquipped({ ...equipped, gloves: Gloves[glovesIndex] }), [glovesIndex])
  useEffect(() => setEquipped({ ...equipped, shoes: Shoes[shoesIndex] }), [shoesIndex])

  function handleCharNameInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    setCharName(value);
  }
  function handleCopTypeInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    setCopType(value);
  }
  function handleSoulVastnessInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    setSoulVastness(value);
  }

  const savePNG = useCallback(() => { //save to picture
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'copo.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  const saveJPG = useCallback(() => { //save to picture
    if (ref.current === null) {
      return
    }

    toJpeg(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'copo.jpg'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const goToSkillDrawer = (() => {
    setViewSkillDrawer(true);
  })
  const goToStatDrawer = (() => {
    setViewSkillDrawer(false);
  })

  const [intellect, setIntellect] = useState(1);
  const [psyche, setPsyche] = useState(1);
  const [physique, setPhysique] = useState(1);
  const [motorics, setMotorics] = useState(1);

  const [availableStatPoints, setAvailableStatPoints] = useState(8)

  function idToStatState(statId: number): { state: number, setState: Dispatch<SetStateAction<number>> } {
    switch (statId) {
      case 0:
        return { state: intellect, setState: setIntellect }
      case 1:
        return { state: psyche, setState: setPsyche }
      case 2:
        return { state: physique, setState: setPhysique }
      case 3:
        return { state: motorics, setState: setMotorics }
      default:
        return { state: intellect, setState: setIntellect }; //todo?
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

  return (
    <div className="App bgDrawersGradient scroll-smooth">
      <div className="flex flex-col " >
        <Landing />
        {!viewSkillDrawer && <StatDrawer goToSkillDrawer={goToSkillDrawer} availableStatPoints={availableStatPoints} incrementStat={incrementStat} decrementStat={decrementStat} intellect={intellect} physique={physique} psyche={psyche} motorics={motorics}
          handleCharNameInputChange={handleCharNameInputChange}
          handleCopTypeInputChange={handleCopTypeInputChange}
          handleSoulVastnessInputChange={handleSoulVastnessInputChange} />}
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
        <div className='flex  justify-center'>
          {viewSkillDrawer && <button onClick={goToStatDrawer} className=" text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Revert All</button>}
          {viewSkillDrawer && <button onClick={savePNG} className=" text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Save To PNG</button>}
          {viewSkillDrawer && <button onClick={saveJPG} className=" text-3xl rounded my-6 mx-auto text-white bg-black p-6 uppercase hover:bg-opacity-80">Save To JPG</button>}

        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>

  );
}

export default App;
