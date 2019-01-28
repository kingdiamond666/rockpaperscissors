import React from 'react';
import { Face } from './EvilFace.module.css';
const evilFace = () => {
    const facesArray = [
        "( ✜︵✜ )",
        "(≧︿≦)",
        "୧༼ಠ益ಠ༽୨",
        "ಠ_ಠ",
        "╭(ʘ̆~◞౪◟~ʘ̆)╮",
        "ಠﭛಠ",
        "(ノಠ益ಠ)ノ",
        "(⊙＿⊙')",
        "halt and catch fire",
        "sudo rm -rf /mylife"
    ]
    const rand = (Math.floor(Math.random() * facesArray.length));
    return  (<h2 className={Face}>{facesArray[rand]}</h2>) 
}

export default evilFace