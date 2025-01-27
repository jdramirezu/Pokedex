import React from 'react';

const PokemonPic = ({id}) =>{
    const picture = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
    return <img src={picture} alt="" className="PokemonImg"/>;
}

export default PokemonPic;