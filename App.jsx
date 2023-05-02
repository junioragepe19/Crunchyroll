import { useState } from 'react'
import { Amostra } from './assets/Components/Amostra'
import { Carrosel } from './assets/Components/Carrosel'
import { Classificacao } from './assets/Components/Classificacao'
import { Comercial } from './assets/Components/Comercial'
import { Header } from './assets/Components/Header'
import { WatchFree } from './assets/Components/WatchFree'
import { MenuHeader } from './assets/Components/MenuHeader'

function App() {
  const [menu, setMenu] = useState(false);
  
  const OpenMenu = (value) => {
    console.log("texto")
    setMenu(value);
  }

  return (
    <div className="bg-black h-full">
      <Header  OpenMenu={OpenMenu}  />
      {menu ?
        <MenuHeader/>
        : 
        <div>
        </div>         
      }
      {/* <Carrosel />
      <Classificacao />
      <Amostra />
      <WatchFree />
      <Comercial /> */}
    </div>
  )
}

export default App
