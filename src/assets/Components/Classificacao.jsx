import { ErrorOutline} from "@mui/icons-material";
import React from "react";
import './general.css';

export function Classificacao(){
    return(
        <div className="w-[81%] mt-12 bg-[#141519] h-12 m-auto flex">
            <div className="text-white font-bold flex gap-2 m-auto text-center">
            {React.cloneElement(<ErrorOutline />)}
            <span className="select">Verifique a Classificação Indicativa</span>
            </div>
        </div>
    )
}