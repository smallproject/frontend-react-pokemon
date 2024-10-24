import './App.css'
import logo from './assets/img.png'
import PokemonDetail from "./components/Pokemon-Detail/Pokemon-Detail.jsx";

function App() {

  return (
    <>
        <img src={logo} alt="pokemon logo" width={"550px"}/>
        <section>
            <button>Vorige</button>
            <button>Volgende</button>
        </section>

        <PokemonDetail />

    </>
  )
}

export default App
