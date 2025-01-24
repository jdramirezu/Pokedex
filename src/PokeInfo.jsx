import React, {useState, useEffect} from "react";

const PokeInfo = function ({name, id, type, weight, height}) {
    // const [pokemon, setPokemon] = useState({});
    
    // useEffect( () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.json()).then(pokemonInfo => setPokemon(pokemonInfo));
    // },[]);

    return(
        <div>
            <ul 
                className = "PokeInfo">
                <li>{`Name: ${name}`}</li>
                <li>{`ID: ${id}`}</li>
                <li>{`Type: ${type}`}</li>
                <li>{`Weight: ${weight}`}</li>
                <li>{`Height: ${height}`}</li>

            </ul>
        </div>
    );
}

export default PokeInfo;