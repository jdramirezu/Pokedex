import React, {useState, useEffect} from "react";

const PokeInfo = function ({id}) {
    const [pokemon, setPokemon] = useState({});
    
    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.json()).then(pokemonInfo => setPokemon(pokemonInfo));
    },[]);

    console.log("pokemon",pokemon);

    return(
        <div>
            <ul>
                <li>{`Name: ${pokemon.name}`}</li>
                <li>{`ID: ${pokemon.id}`}</li>
                <li>{`Type ${pokemon.types}`}</li>
                <li>{`Weight: ${pokemon.weight}`}</li>
                <li>{`Height: ${pokemon.height}`}</li>

            </ul>
        </div>
    );
}

export default PokeInfo;