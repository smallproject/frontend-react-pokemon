import './App.css'
import logo from './assets/img.png'
import PokemonDetail from "./components/Pokemon-Detail/Pokemon-Detail.jsx";
import {useEffect, useState} from "react";

function App() {
    const [pokemons, setPokemons] = useState(null);
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon");
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchPokemons() {
            toggleLoading(true);
            toggleError(false)

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setPokemons(data);
            } catch (e) {
                toggleError(true);
                console.error(e)
            } finally {
                toggleLoading(false);
            }
        }

        fetchPokemons();
    }, []);

    return (
        <div>

            {pokemons &&
                <>
                    <img src={logo} alt="pokemon logo" width={"550px"}/>
                    <section className={"buttons-section"}>
                        <button>Vorige</button>
                        <button>Volgende</button>
                    </section>

                    <PokemonDetail endpoint={"https://pokeapi.co/api/v2/pokemon/ditto"}/>

                    {pokemons.results && pokemons.results.map((pokemon) => {
                        return <PokemonDetail key={pokemon.name} endpoint={pokemon.url}/>
                    })}
                </>
            }
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong..{error}</p>}
        </div>
    )
}

export default App
