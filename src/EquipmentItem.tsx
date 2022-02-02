import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Clothes } from './Clothes_Data';


function generateModifierText(item: Clothes) {
    let bonuses: string[] = [];
    if (item.modifiers) {
        for (const modifier of item.modifiers) {
            bonuses.push((modifier.increment ? "+" : "-") + modifier.value + " " + modifier.skill)
        }
    }
    return bonuses
}




const EquipmentItem = (props: { item: Clothes, nextClothingItem: Function, ClothingLayer: number }) => {

    // const [bonuses,setBonuses] = useState<string[]>(generateModifierText(props.item)) //TODO make local useless state



    const bonuses=generateModifierText(props.item);
    return <div className='relative bg-black bg-opacity-90 text-white overflow-hidden'>
        
        <div className='group absolute w-full '>
            <IconContext.Provider value={{ style: { opacity: "10%" } }}>
                <AiOutlineInfoCircle />
            </IconContext.Provider>

            <div className="hidden group-hover:inline group-hover:bg-opacity-90 absolute  bg-black p-2 z-40">
                <p className=' text-xs'> {props.item.name || "placeholder description"}</p>
                {bonuses && bonuses.map(str => { return <p key={props.item.name+str} className=' text-xs'>{str}</p> })}
            </div>
        </div>


        <div className='flex justify-between absolute w-full top-6'>
            <button onClick={() => props.nextClothingItem(-1, props.ClothingLayer)} className=" bg-black opacity-5 hover:opacity-100  text-lg text-white p-2 z-40">
                {"<"}
            </button>
            <button onClick={() => props.nextClothingItem(1, props.ClothingLayer)} className=" text-right   bg-black opacity-5 hover:opacity-100  text-lg text-white p-2 z-40">
                {">"}
            </button>
        </div>


        <img src={props.item.img} className=" object-contain max-h-[100px]  w-full" alt="" />


    </div >;
};

export default EquipmentItem;
