import { useState } from "react";
import React from "react";
import { Button, IconButton } from "@mui/material";
import { ExpandMore, Search, TurnedInNot, PersonOutlineRounded, Menu, Padding} from "@mui/icons-material";
import './MenuHeader.css'
export function MenuHeader(){

    return(
        <div className="absolute z-101 mt-14 left-0 w-full h-full bg-white">
            <div className="scroll w-[14rem] h-full bg-[#141519] overflow-auto">
                <span className="uppercase text-[10px] text-[#A0A0A0] pl-3">Navegar</span>
                <div className="h-full w-full font-medium">
                    <ul className="flex flex-col">
                        <li className="hover:bg-[#23252B] indent-1 h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none font-Lato capitalize">Populares</Button>
                        </li>
                        <li className="hover:bg-[#23252B] indent-1 h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none capitalize">Novidades</Button>
                        </li>
                        <li className="hover:bg-[#23252B] h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none capitalize text-start">A-Z</Button>
                        </li>
                        <li className="hover:bg-[#23252B] indent-1 h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none capitalize text-start">Simulcasts da Temporada</Button>
                        </li>
                        <li className="hover:bg-[#23252B] indent-1 h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none capitalize text-start">Calendário de Lançamentos</Button>
                        </li>
                        <li className="hover:bg-[#23252B] indent-1 h-8 cursor-pointer">
                            <Button className="text-white text-[12px] pointer-events-none capitalize text-start">Videoclipes & Shows </Button>
                        </li>
                        <li className="hover:bg-[#23252B] h-8 cursor-pointer flex">
                            <Button className="text-white text-[12px] indent-1 pointer-events-none capitalize text-start" style={{PaddingRight:'4rem'}}>Gêneros</Button>
                            <ExpandMore  sx={{ fontSize: "18px", color: "white", margin: 'auto', marginRight: '14px'}}/>
                        </li>
                        <hr className="border-[#23252B] border-1"></hr>
                        <li className="hover:bg-[#23252B] indent-1 mt-2 h-8 cursor-pointer flex">
                            <Button className="text-white text-[12px]  pointer-events-none capitalize text-start" style={{PaddingRight:'4rem'}}>Mangá</Button>
                        </li>
                        <li className="hover:bg-[#23252B]  indent-1 h-8 cursor-pointer flex">
                            <Button className="text-white text-[12px] pointer-events-none capitalize text-start" style={{PaddingRight:'4rem'}}>Jogos</Button>
                        </li>
                        <li className="hover:bg-[#23252B] h-8 cursor-pointer flex">
                            <Button className="text-white text-[12px] indent-1 pointer-events-none capitalize text-start" style={{PaddingRight:'4rem'}}>Notícias</Button>
                            <ExpandMore  sx={{ fontSize: "18px", color: "white", margin: 'auto', marginRight: '14px'}}/>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}