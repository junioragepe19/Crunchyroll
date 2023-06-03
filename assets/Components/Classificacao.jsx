import { ErrorOutline} from "@mui/icons-material";
import React from "react";
import './general.css';

export function Classificacao(){
    return(
        <div className="w-full absolute mt-[37rem] h-12 flex mx-auto">
            <div className="w-[66rem] bg-[#141519] flex mx-auto">
            <div className="text-white font-bold flex gap-2 m-auto text-center">
            {React.cloneElement(<ErrorOutline />)}
            <span className="select">Verifique a Classificação Indicativa</span>
            </div>
            </div>
        </div>
    )
}