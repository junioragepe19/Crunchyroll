import { Button, IconButton } from "@mui/material";

export function DropdownNews({Clicked}){
    return(
        <div>
            {Clicked ? 
            <div>
                <div className="bg-[#141519] w-[18rem] h-fit absolute top-14 left-[28.1rem] flex transition duration-75 z-20">
                    <ul className="w-full mb-2 mt-2 indent-2">
                        <li className="hover:bg-[#23252B] pt-[0.7rem] w-full cursor-pointer">
                            <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Todas as Notícias</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] w-full cursor-pointer">
                            <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Anime Awards</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] w-full cursor-pointer">
                            <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Crunchyroll Expo</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] w-full cursor-pointer">
                            <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Anime Movie Night</Button>
                        </li>
                    </ul>
                    
                </div>
                <div className="w-full bg-[rgba(0,0,0,0.3)] absolute h-full top-14 left-0 z-10"> 
                </div>
            </div>
            :
            <div>

            </div>}
        </div>
    )
}