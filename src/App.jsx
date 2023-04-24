import { Amostra } from './assets/Components/Amostra'
import { Carrosel } from './assets/Components/Carrosel'
import { Classificacao } from './assets/Components/Classificacao'
import { Comercial } from './assets/Components/Comercial'
import { Header } from './assets/Components/Header'
import { WatchFree } from './assets/Components/WatchFree'

function App() {
  

  return (
    <div className="bg-black h-full">
      <Header />
      <Carrosel />
      <Classificacao />
      <Amostra />
      <WatchFree />
      <Comercial />
    </div>
  )
}

export default App
