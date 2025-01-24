import React from 'react';
import PokedexImg from './assets/Pokedex.png'
import PokemonPic from './PokemonPic.jsx'
import './Pokedex.css'
import PokeInfo from './PokeInfo.jsx';

const Pokedex = ({pokemon}) =>{
    return (
        <div >
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
        </div>
    );
}

export default Pokedex;