import React from 'react';
import PokedexImg from './assets/Pokedex.png'
import PokemonPic from './PokemonPic.jsx'
import './Pokedex.css'
import PokeInfo from './PokeInfo.jsx';

const Pokedex = () =>{
    return (
        <div >
            <img src={PokedexImg} className="PokedexImg"/>
            <div>
                <PokemonPic id={25} />
                <PokeInfo id = {25}/>
            </div>
        </div>
    );
}

export default Pokedex;