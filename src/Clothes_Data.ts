import {  skillModifier, Skills_enum } from "./Utils";
import amphi from './images/hats/Hat_amphibian_sports_visor.webp';
import camionneur from './images/hats/Hat_camionneur.webp';
import t500Hat from './images/hats/Hat_t500.webp';

import glbiker from './images/glasses/Glasses_biker.webp';
import fliup from './images/glasses/Glasses_flipup.webp';


import jack_suede from './images/jackets/Jacket_suede.webp';
import Jacket_windbreaker from './images/jackets/Jacket_windbreaker_surf.webp';

import Neck_winter_scarf from './images/neckwear/Neck_winter_scarf.webp'

import Shirt_t500 from './images/shirts/Shirt_t500.webp'

import Gloves_t500 from './images/gloves/Gloves_t500.webp'

import Pants_faln from './images/pants/Pants_faln.webp'

import Shoes_fancy_loafer from './images/shoes/Shoes_fancy_loafer.webp'


//TODO should be json or whatever


export interface Clothes {
    name: string,
    slot: "Hats" | "Glasses" | "Jackets" | "Neckwear" | "Shirts" | "Gloves" | "Pants" | "Shoes",
    desc?: string,
    modifiers?: skillModifier[],
    img?:string

}
export const Hats: Clothes[] = [
    {
        name: "Amphibian Sports Visor",
        desc:"+1 Perception ",
        slot: "Hats",
        img:amphi,
        modifiers: [
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: true
            }
        ]
    },
    {
        name: "Camionneur Cap",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_hande,
                value: 1,
                increment: true
            }
        ],
        img:camionneur,
    },
    {
        name: "Fairweather T-500 Helmet ",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_halfl,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: false
            }
        ],img:t500Hat,
    },
];
export const Glasses: Clothes[] = [
    {
        name: "Flip-up Glasses The Auditor ",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: false
            }
        ],img:fliup,
    },
    {
        name: "Jamrock Biker-Cop Sunnies",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_empat,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: false
            }
        ],img:glbiker,
    },
];
export const Jackets: Clothes[] = [
    {
        name: "Disco-Ass Blazer ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: false
            }
        ],img:jack_suede,
    },
    {
        name: "Dynamic Winderbreaker Surf ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_shive,
                value: 1,
                increment: false
            }
        ],img:Jacket_windbreaker,
    },
];
export const Neckwear: Clothes[] = [
    {
        name: "Army Surplus Winter Scarf",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_empat,
                value: 2,
                increment: true
            },
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: false
            }
        ],img:Neck_winter_scarf,
    },
];
export const Shirts: Clothes[] = [
    {
        name: "Fairweather T-500 Cuirass ",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_paint,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_volit,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_empat,
                value: 1,
                increment: false
            }
        ],img:Shirt_t500
    },
];
export const Gloves: Clothes[] = [
    {
        name: "Fairweather T-500 Gauntlets",
        slot: "Gloves",
        modifiers: [
            {
                skill: Skills_enum.sk_inter,
                value: 2,
                increment: true
            },
        ],img:Gloves_t500
    },
];
export const Pants: Clothes[] = [
    {
        name: "FALN Modular Track Pants",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_savoi,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_physi,
                value: 1,
                increment: false
            },
        ],img:Pants_faln
    },
];
export const Shoes: Clothes[] = [
    {
        name: "Black Monkstraps ",
        slot: "Shoes",
        modifiers: []
        ,img:Shoes_fancy_loafer
    }
];
