import React from 'react';

// async PokemonDB = () =>{
//     const pokemonsAPI = await fetch('https://pokeapi.co/api/v2/pokemon?limit=649')
//     const Pokemons = await pokemonsAPI.json();
//     return Pokemons;
// }

const PokemonPic = ({id}) =>{
    const picture = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
    return <img src={picture} alt=""/>;
}

export default PokemonPic;