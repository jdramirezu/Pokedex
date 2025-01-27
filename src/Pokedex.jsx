import React,{useState, useEffect} from 'react';
import PokedexImg from './assets/Pokedex.png'
import PokemonPic from './PokemonPic.jsx'
import './Pokedex.css'
import PokeInfo from './PokeInfo.jsx';

const Pokedex = ({pokemon}) =>{
    // const [pokemon, setPokemon] = useState();

    // useEffect( () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    //     .then(response => response.json())
    //     .then(data => setPokemon(data));
    // }, []);
    

    return !pokemon ?
        <h1>Pokedex will show here</h1> :
    (
        <>
            <img src={PokedexImg} className="PokedexImg"/>
            <div>
                <PokemonPic id={pokemon.id} />
                <PokeInfo
                    key = {pokemon.id}
                    id = {pokemon.id}
                    name = {pokemon.name}
                    weight = {pokemon.weight}
                    height = {pokemon.height}
                    type = {pokemon.types["0"].type.name}                
                />
            </div>
        </>
    );
}

export default Pokedex;