import React from 'react';
import PokedexImg from './assets/Pokedex.png'
import PokemonPic from './PokemonPic.jsx'
import './Pokedex.css'

const Pokedex = () =>{
    return (
        <div >
            <img src={PokedexImg} className="PokedexImg"/>
            <PokemonPic id={25} />
        </div>
    );
}

export default Pokedex;