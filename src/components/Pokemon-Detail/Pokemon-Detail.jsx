import "./Pokemon-Detail.css";
import React, {useEffect, useState} from 'react';
import axios from "axios";

function PokemonDetail(props) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);

            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
                setPokemon(response.data);
                console.log(response.data);

            } catch (e) {
                setError(true);
                console.error(e)
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    return (
        <article className={"card"}>
            {/*{Object.keys(pokemon).length > 0 &&*/}
            {/*    <>*/}
            {/*        <h2>{poke.name}</h2>*/}
            {/*    </>*/}
            {/*}*/}
            <h2>{pokemon ? pokemon.name : ""}</h2>
            <img
                src={pokemon ? pokemon.sprites.front_default : ""}
                alt="Pokemon Image"
            />
            <p><strong>Moves: </strong>{pokemon ? pokemon.moves.length : ""}</p>
            <p><strong>Weight: </strong>{pokemon ? pokemon.weight : ""}</p>
            <p><strong>Abilities: </strong></p>
            <ul>
                {pokemon && pokemon.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong..{error}</p>}
        </article>
    );
}

export default PokemonDetail;