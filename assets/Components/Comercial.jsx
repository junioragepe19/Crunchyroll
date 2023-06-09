import {Link} from 'react-router-dom';

export function Comercial(){
    return(
        <div className="w-full absolute mt-[100rem] flex h-[30rem]">
            <a className="flex m-auto">
               <Link to="video"><img src="https://static.crunchyroll.com/fms/desktop_large/1050x350/94e861a8-2fa8-4452-b862-4556cc87e8c5.png" />
               </Link> 
            </a>
        </div>
    )
}