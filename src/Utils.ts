import { Clothes } from "./Clothes_Data";

export enum Skills_enum {
    sk_logic = "Logic",
    sk_rheto = "Rhetoric",
    sk_encyc = "Encyclopedia",
    sk_drama = "Drama",
    sk_conce = "Conceptualization",
    sk_visua = "Visual Calculus",
    sk_volit = "Volition",
    sk_inlan = "Inland Empire",
    sk_empat = "Empathy",
    sk_autho = "Authority",
    sk_espri = "Esprit De Corps",
    sk_sugge = "Suggestion",
    sk_endur = "endurance",
    sk_paint = "Pain Threshold",
    sk_physi = "Physical Instrument",
    sk_elect = "Electro-Chemistry",
    sk_shive = "Shivers",
    sk_halfl = "Half Light",
    sk_hande = "Hand/Eye Coordination",
    sk_perce = "Perception",
    sk_react = "Reaction Speed",
    sk_savoi = "Savoir Faire",
    sk_inter = "Interfacing",
    sk_compu = "Composure"
}

export enum Skills_Desc_enum {
    sk_logic = "Wield raw intellectual power. Deduce the world. ",
    sk_rheto = "Practice the art of persuasion. Enjoy rigorous intellectual discourse. ",
    sk_encyc = "Call upon all your knowledge. Produce fascinating trivia. ",
    sk_drama = "Play the actor. Lie and detect lies. ",
    sk_conce = "Understand creativity. See Art in the world. ",
    sk_visua = "Reconstruct crime scenes. Make laws of physics work for the Law.",
    sk_volit = "Hold yourself together. Keep your Morale up. ",
    sk_inlan = "Hunches and gut feelings. Dreams in waking life. ",
    sk_empat = "Understand others. Work your mirror neurons. ",
    sk_autho = "Intimidate the public. Assert yourself. ",
    sk_espri = "Connect to Station 41. Understand cop culture. ",
    sk_sugge = "Charm men and women. Play the puppet-master.",
    sk_endur = "Take the blows. Don’t let the world kill you. ",
    sk_paint = "Shrug off the pain. They’ll have to hurt you more. ",
    sk_physi = "Flex powerful muscles. Enjoy healthy organs. ",
    sk_elect = "Go to party planet. Love and be loved by drugs.",
    sk_shive = "Raise the hair on your neck. Tune in to the city. ",
    sk_halfl = "Let the body take control. Threaten people. ",
    sk_hande = "Ready? Aim and fire. ",
    sk_perce = "See, hear and smell everything. Let no detail go unnoticed. ",
    sk_react = "The quickest to react. An untouchable man. ",
    sk_savoi = "Sneak under their noses. Stun with immense panache. ",
    sk_inter = "Master machines. Pick locks and pockets. ",
    sk_compu = "Straighten your back. Keep your poker face. "
}

export enum copType_enum {
    apocal = "Apocalypse Cop",
    boring = "Boring Cop",
    fancy = "Fancy Cop",
    hobo = "Hobo Cop",
    sorry = "Sorry Cop",
    supers = "Superstar Cop"
}
export enum soulVastness_enum {
    immense = "Immense Soul",
    puny = "Puny Soul",
    modest = "Modest, normal sized Soul",
    hangover = "Shadowed by hangover Soul",
}



export interface skillModifier {
    skill: Skills_enum,
    value: number,
    increment: boolean
}

export interface Equipment{
    hat:Clothes,
    glasses:Clothes,
    jacket:Clothes,
    neckwear:Clothes,
    shirt:Clothes,
    gloves:Clothes,
    pants:Clothes,
    shoes:Clothes
}

