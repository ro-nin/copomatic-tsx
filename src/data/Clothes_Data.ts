import { skillModifier, Skills_enum } from "../utils/Utils";

import amphi from '../images/hats/Hat_amphibian_sports_visor.webp';
import camionneur from '../images/hats/Hat_camionneur.webp';
import t500Hat from '../images/hats/Hat_t500.webp';
import Hat_mullen from '../images/hats/Hat_mullen.webp';
import Hat_faln from '../images/hats/Hat_faln.webp';
import Hat_bum from '../images/hats/Hat_bum.webp';
import Hat_rcm from '../images/hats/Hat_rcm.webp';
import Hat_revolutionary from '../images/hats/Hat_revolutionary.webp';
import Hat_samaran from '../images/hats/Hat_samaran.webp';

import glbiker from '../images/glasses/Glasses_biker.webp';
import Glasses_megabinos from '../images/glasses/Glasses_megabinos.webp';
import Glasses_rect from '../images/glasses/Glasses_rect.webp';
import Glasses_bugeyes from '../images/glasses/Glasses_bugeyes.webp';
import Glasses_self_destruction from '../images/glasses/Glasses_self_destruction.webp';
import Glasses_sub_insulindics from '../images/glasses/Glasses_sub_insulindics.webp';
import Glasses_flipup from '../images/glasses/Glasses_flipup.webp';


import jack_suede from '../images/jackets/Jacket_suede.webp';
import Jacket_windbreaker from '../images/jackets/Jacket_windbreaker_surf.webp';
import Jacket_faln from '../images/jackets/Jacket_faln.webp';
import Jacket_fritte_raincoat from '../images/jackets/Jacket_fritte_raincoat.webp';
import Jacket_interisolar from '../images/jackets/Jacket_interisolar.webp';
import Jacket_korovjev from '../images/jackets/Jacket_korovjev.webp';
import Jacket_fucktheworld from '../images/jackets/Jacket_fucktheworld.webp';
import Jacket_pissflaubert from '../images/jackets/Jacket_pissflaubert.webp';
import Jacket_kimono_robe from '../images/jackets/Jacket_kimono_robe.webp';
import Jacket_mullen_big from '../images/jackets/Jacket_mullen_big.webp';
import Jacket_nansencoat_big from '../images/jackets/Jacket_nansencoat_big.webp';
import Jacket_rcm from '../images/jackets/Jacket_rcm.webp';
import Jacket_patrol_cloak_big from '../images/jackets/Jacket_patrol_cloak_big.webp';
import Jacket_reflective_vest from '../images/jackets/Jacket_reflective_vest.webp';
import Jacket_carabineer from '../images/jackets/Jacket_carabineer.webp';
import Jacket_interisolar_white from '../images/jackets/Jacket_interisolar_white.webp';
import Jacket_navalcoat_big from '../images/jackets/Jacket_navalcoat_big.webp';


import Neck_winter_scarf from '../images/neckwear/Neck_winter_scarf.webp'
import Neck_bowtie from '../images/neckwear/Neck_bowtie.webp'
import Neck_teratorn_tie from '../images/neckwear/Neck_teratorn_tie.webp'
import Neck_tie from '../images/neckwear/Neck_tie.webp'
import Neck_setting_sun_medal from '../images/neckwear/Neck_setting_sun_medal.webp'
import Neck_winter_scarf_red from '../images/neckwear/Neck_winter_scarf_red.webp'
import Neck_scented_scarf from '../images/neckwear/Neck_scented_scarf.webp'

import Shirt_t500 from '../images/shirts/Shirt_t500.webp'
import Shirt_faln from '../images/shirts/Shirt_faln.webp'
import Shirt_mesh from '../images/shirts/Shirt_mesh.webp'
import Shirt_interisolar from '../images/shirts/Shirt_interisolar.webp'
import Shirt_hjelmdall from '../images/shirts/Shirt_hjelmdall.webp'
import Shirt_polo from '../images/shirts/Shirt_polo.webp'
import Shirt_dress_disco from '../images/shirts/Shirt_dress_disco.webp'
import Shirt_tank_top from '../images/shirts/Shirt_tank_top.webp'

import Gloves_t500 from '../images/gloves/Gloves_t500.webp'
import Gloves_bum from '../images/gloves/Gloves_bum.webp'
import Gloves_faln from '../images/gloves/Gloves_faln.webp'
import Gloves_garden from '../images/gloves/Gloves_faln.webp'

import Pants_faln from '../images/pants/Pants_faln.webp'
import Pants_bellbottom from '../images/pants/Pants_bellbottom.webp'
import Pants_interisolar from '../images/pants/Pants_interisolar.webp'
import Pants_itchy_angry from '../images/pants/Pants_itchy_angry.webp'
import Pants_jeans_red from '../images/pants/Pants_jeans_red.webp'
import Pants_jeans from '../images/pants/Pants_jeans.webp'
import Pants_jeans_black from '../images/pants/Pants_jeans_black.webp'
import Pants_rcm from '../images/pants/Pants_rcm.webp'
import Pants_carabineer from '../images/pants/Pants_carabineer.webp'
import Pants_interisolar_white from '../images/pants/Pants_interisolar_white.webp'

import Shoes_fancy_loafer from '../images/shoes/Shoes_fancy_loafer.webp'
import Shoes_cavalry from '../images/shoes/Shoes_cavalry.webp'
import Shoes_donks from '../images/shoes/Shoes_donks.webp'
import Shoes_faln from '../images/shoes/Shoes_faln.webp'
import Shoes_fancy_loafer_brown from '../images/shoes/Shoes_fancy_loafer_brown.webp'
import Shoes_snakeskin from '../images/shoes/Shoes_snakeskin.webp'
import Shoes_snakeskin_red from '../images/shoes/Shoes_snakeskin_red.webp'
import Shoes_t500 from '../images/shoes/Shoes_t500.webp'


//TODO should be json or whatever
//TODO remove unnecessary "increment" field from model and just use negative "Value"

export interface Clothes {
    name: string,
    slot: "Hats" | "Glasses" | "Jackets" | "Neckwear" | "Shirts" | "Gloves" | "Pants" | "Shoes",
    desc?: string,
    modifiers?: skillModifier[],
    img?: string

}
export const Hats: Clothes[] = [
    {
        name: "Amphibian Sports Visor",
        desc: "+1 Perception ",
        slot: "Hats",
        img: amphi,
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
        img: camionneur,
    },
    {
        name: "Dick Mullen's Hat ",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_encyc,
                value: 1,
                increment: true
            }
        ],
        img: Hat_mullen,
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
        ], img: t500Hat,
    },
    {
        name: "FALN Pipo Pipo",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 2,
                increment: true
            },
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: false
            }
        ], img: Hat_faln,
    },
    {
        name: "Orange Bum Hat",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_rheto,
                value: 1,
                increment: false
            }
        ], img: Hat_bum,
    },
    {
        name: "RCM Lieutenant's Cap",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: true
            }
        ], img: Hat_rcm,
    },
    {
        name: "Revolutionary's Hat ",
        slot: "Hats",
        modifiers: [

        ], img: Hat_revolutionary,
    },
    {
        name: "Samaran Conical Hat ",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: false
            },
        ], img: Hat_samaran,
    },
    {
        name: "Specialist-Grade Headset",
        slot: "Hats",
        modifiers: [
            {
                skill: Skills_enum.sk_inlan,
                value: 2,
                increment: true
            },
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: false
            },
        ], img: Hat_samaran,
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
        ], img: Glasses_flipup,
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
        ], img: glbiker,
    },
    {
        name: "Mega-Bino's Prescription Lenses ",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_encyc,
                value: 2,
                increment: true
            },
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: false
            }
        ], img: Glasses_megabinos,
    },
    {
        name: "Neat Office Shades",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_visua,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_drama,
                value: 1,
                increment: false
            }
        ], img: Glasses_rect,
    },
    {
        name: "Oversized Superstar Sunglasses ",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_savoi,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_visua,
                value: 1,
                increment: false
            }
        ], img: Glasses_bugeyes,
    },
    {
        name: "Shades of Self-Destruction",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: false
            }
        ], img: Glasses_self_destruction,
    },
    {
        name: "Sunglasses Sub-Insulindic Rendezvous ",
        slot: "Glasses",
        modifiers: [
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: false
            },
            {
                skill: Skills_enum.sk_inlan,
                value: 1,
                increment: false
            }
        ], img: Glasses_sub_insulindics,
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
        ], img: jack_suede,
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
        ], img: Jacket_windbreaker,
    },
    {
        name: "FALN Faln Windbreaker",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_paint,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_drama,
                value: 1,
                increment: false
            },
            {
                skill: Skills_enum.sk_halfl,
                value: 1,
                increment: true
            }
        ], img: Jacket_faln,
    },
    {
        name: "FRITTTE Plastic Rain Coat ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_endur,
                value: 1,
                increment: true
            },
        ], img: Jacket_fritte_raincoat,
    },
    {
        name: "Interisolary Suit Jacket ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: true
            },
        ], img: Jacket_interisolar,
    },
    {
        name: "Korojev Jacket ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: true
            },
        ], img: Jacket_korovjev,
    },
    {
        name: "Leather Jacket Pissf****t ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_drama,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: false
            },
        ], img: Jacket_pissflaubert,
    },
    {
        name: "Leather Jacket Fuck the World ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_halfl,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: false
            },
        ], img: Jacket_fucktheworld,
    },
    {
        name: "Party Dragon's Silk Robe ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_drama,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
        ], img: Jacket_kimono_robe,
    },
    {
        name: "Pinball Maker's Coat ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_empat,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_hande,
                value: 1,
                increment: true
            },
        ], img: Jacket_mullen_big,
    },
    {
        name: "Polar Anorak ",
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
                increment: true
            },
        ], img: Jacket_nansencoat_big,
    },
    {
        name: "RCM Commander's Jacket ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_espri,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_visua,
                value: 1,
                increment: true
            },
        ], img: Jacket_rcm,
    },
    {
        name: "RCM Patrol Cloak ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_espri,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_shive,
                value: 1,
                increment: true
            },
        ], img: Jacket_patrol_cloak_big,
    },
    {
        name: "Reflective Construction Vest  ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_endur,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: false
            },
        ], img: Jacket_reflective_vest,
    },
    {
        name: "Saramirizian Lounge Jacket  ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_conce,
                value: 1,
                increment: true
            },

        ], img: Jacket_interisolar_white,
    },
    {
        name: "Royal Carabineer Jacket ",
        slot: "Jackets",
        modifiers: [

        ], img: Jacket_carabineer,
    },
    {
        name: "Signal-Blue Naval Coat ",
        slot: "Jackets",
        modifiers: [
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_halfl,
                value: 1,
                increment: false
            },
        ], img: Jacket_navalcoat_big,
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
        ], img: Neck_winter_scarf,
    },
    {
        name: "Bow Knot ",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_drama,
                value: 2,
                increment: true
            },
        ], img: Neck_bowtie,
    },
    {
        name: "Eight-Eyed Teratorn Tie  ",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_inlan,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_volit,
                value: 1,
                increment: true
            },
        ], img: Neck_teratorn_tie,
    },
    {
        name: "Horrific Necktie",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_inlan,
                value: 1,
                increment: true
            },

        ], img: Neck_tie,
    },
    {
        name: "Medal The Setting Sun ",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_rheto,
                value: 1,
                increment: true
            },

        ], img: Neck_setting_sun_medal,
    },
    {
        name: "Mesque Banger's Silk Scarf  ",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_paint,
                value: 1,
                increment: true
            },

        ], img: Neck_winter_scarf_red,
    },
    {
        name: "Scented Scarf",
        slot: "Neckwear",
        modifiers: [
            {
                skill: Skills_enum.sk_shive,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_physi,
                value: 2,
                increment: false
            },

        ], img: Neck_scented_scarf,
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
        ], img: Shirt_t500
    },
    {
        name: "FALN Arrower Shirt ",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_hande,
                value: 1,
                increment: true
            },
        ], img: Shirt_faln
    },
    {
        name: "Insane Mesh Tank Top",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_drama,
                value: 1,
                increment: true
            },
        ], img: Shirt_mesh
    },
    {
        name: "Interisolary Dress Shirt",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_logic,
                value: 1,
                increment: true
            },
        ], img: Shirt_interisolar
    },
    {
        name: "T-Shirt Man From Hjelmdall ",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_physi,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_shive,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_autho,
                value: 2,
                increment: false
            },
        ], img: Shirt_hjelmdall
    },
    {
        name: "White Polo Shirt ",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_rheto,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_empat,
                value: 1,
                increment: false
            },

        ], img: Shirt_polo
    },
    {
        name: "White Satin Shirt ",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_conce,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: false
            },

        ], img: Shirt_dress_disco
    },
    {
        name: "White Tank Top",
        slot: "Shirts",
        modifiers: [
            {
                skill: Skills_enum.sk_physi,
                value: 1,
                increment: true
            },


        ], img: Shirt_tank_top
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
        ], img: Gloves_t500
    },
    {
        name: "Fingerless Gloves ",
        slot: "Gloves",
        modifiers: [
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
        ], img: Gloves_bum
    },
    {
        name: "Yellow Gardening Gloves  ",
        slot: "Gloves",
        modifiers: [
            {
                skill: Skills_enum.sk_inter,
                value: 1,
                increment: true
            },
        ], img: Gloves_garden
    },
    {
        name: "FALN Ultra Series Gloves",
        slot: "Gloves",
        modifiers: [
            {
                skill: Skills_enum.sk_halfl,
                value: 1,
                increment: true
            },
        ], img: Gloves_faln
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
        ], img: Pants_faln
    },
    {
        name: "Flare-cut Trousers",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_savoi,
                value: 1,
                increment: false
            },
        ], img: Pants_bellbottom
    },
    {
        name: "Interisolary Trousers ",
        slot: "Pants",
        modifiers: [

        ], img: Pants_interisolar
    },
    {
        name: "Itchy Pants ",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_halfl,
                value: 2,
                increment: true
            },
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: false
            },
            {
                skill: Skills_enum.sk_savoi,
                value: 1,
                increment: false
            },
        ], img: Pants_itchy_angry
    },
    {
        name: "Mesque Banger's Red Jeans  ",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_physi,
                value: 1,
                increment: true
            },

        ], img: Pants_jeans_red
    },
    {
        name: "Pour L'Homme Labourer Jeans",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: false
            },

        ], img: Pants_jeans
    },
    {
        name: "RCM Lieutenant's Pants ",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_sugge,
                value: 1,
                increment: true
            },

        ], img: Pants_rcm
    },
    {
        name: "Regular Black Jeans ",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: true
            },
        ], img: Pants_jeans_black
    },
    {
        name: "Royal Carabineer Pants ",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: true
            },
        ], img: Pants_carabineer
    },
    {
        name: "Saramirizian Lounge Trousers",
        slot: "Pants",
        modifiers: [
            {
                skill: Skills_enum.sk_visua,
                value: 2,
                increment: true
            },
        ], img: Pants_interisolar_white
    },
];
export const Shoes: Clothes[] = [
    {
        name: "Black Monkstraps ",
        slot: "Shoes",
        modifiers: [

        ]
        , img: Shoes_fancy_loafer
    },
    {
        name: "Brown Derbies ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: true
            },
        ]
        , img: Shoes_fancy_loafer_brown
    },
    {
        name: "Fairweather T-500 Greaves ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_autho,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: false
            },
        ]
        , img: Shoes_t500
    },
    {
        name: "FALN Ultra Series Sneakers ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_react,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_hande,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_encyc,
                value: 1,
                increment: false
            },
        ]
        , img: Shoes_faln
    },
    {
        name: "Franconigerian Cavalry Boots ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_perce,
                value: 1,
                increment: true
            },

        ]
        , img: Shoes_cavalry
    },
    {
        name: "Green Snakeskin Shoes ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_compu,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_savoi,
                value: 1,
                increment: false
            },

        ]
        , img: Shoes_snakeskin
    },
    {
        name: "Mesque Banger's Red Brogues ",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_empat,
                value: 1,
                increment: true
            },
        ]
        , img: Shoes_snakeskin_red
    },
    {
        name: "Speedfreaks DONKS",
        slot: "Shoes",
        modifiers: [
            {
                skill: Skills_enum.sk_physi,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_elect,
                value: 1,
                increment: true
            },
            {
                skill: Skills_enum.sk_inter,
                value: 1,
                increment: false
            },
        ]
        , img: Shoes_donks
    },
];
