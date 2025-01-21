import React from 'react';
import PokedexImg from './assets/Pokedex.png'
import PokemonPic from './PokemonPic.jsx'

const Pokedex = () =>{
    return (
        <>
            <img src={PokedexImg} alt="Pokedex"/>
            <PokemonPic id={25}/>
        </>
    );
}

export default Pokedex;