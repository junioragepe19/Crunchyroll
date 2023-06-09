import { Amostra } from '../assets/Components/Amostra'
import { Carrosel } from '../assets/Components/Carrosel'
import { Classificacao } from '../assets/Components/Classificacao'
import { Comercial } from '../assets/Components/Comercial'
import { WatchFree } from '../assets/Components/WatchFree'
import { MenuHeader } from '../assets/Components/MenuHeader'

const menuInfo = true;
export function Initial(){
    return(
      <div className="h-full">
        {/* <div className='absolute z-200 top-0 left-0 h-full w-full'>
        {menuInfo ?
          <MenuHeader/>
          : 
          <div>
          </div>         
        }
        </div> */}
        <Carrosel />
        <Classificacao />
        <Amostra />
        <WatchFree />
        <Comercial />
      </div>
    )
}