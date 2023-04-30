import { Button} from "@mui/material";

export function DropdownNav({Clicked}){
    const generos = ["Ação","Aventura","Comédia","Drama","Fantasia","Música","Romance","Ficção Científica",
                    "Seinen","Shoujo","Shounen","Slice-of-Life","Esportes","Sobrenatural","Suspense"]
    
    const listaGeneros = generos.map((item) =>
    <li className="hover:bg-[#23252B] pt-[0.7rem] cursor-pointer w-[12rem]">
    <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>{item}</Button>
    </li>
    
  );
    return(
        <div>
            {Clicked ? 
            <div className="bg-[#141519] w-full h-[23rem] absolute top-14 left-0 flex transition duration-75 z-20">
                <div>
                    <ul className="ml-[9.5rem] mt-[1.5rem] w-[12rem]">
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize" style={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Populares</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize" sx={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Novidades</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize" sx={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>A-Z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize"  sx={{ fontSize: '14px', fontFamily: "font-Lato"}}>Simulcasts da Temporada</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize" sx={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Calendário de Lançamentos</Button>
                        </li>
                        <li className="hover:bg-[#23252B] pt-[0.7rem] mr-[1rem]">
                            <Button className="text-white pointer-events-none capitalize " sx={{ fontSize: '14px', textAlign: "left", fontFamily: "font-Lato"}}>Vídeoclipes & Shows</Button>
                        </li>
                    </ul>
                </div>
                <div className="border-l-[#23252B] border-l-2 h-[87%] mt-[1.5rem]">
                </div>
                <div className="mt-[2.2rem]">
                    <h1 className="text-[#A0A0A0] ml-[4rem]">Gêneros</h1>
                    <ul className="ml-[3rem] mt-[1.5rem] w-[15rem] grid grid-rows-5 grid-flow-col">
                        {listaGeneros}
                    </ul>
                </div>
                <div className="w-full bg-[rgba(0,0,0,0.3)] absolute h-full top-[23rem] left-0 z-10"> 
                </div>
            </div>
            :
            <div>
            </div>
            }
        </div>
    )
}