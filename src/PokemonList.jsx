import React, {useState, useEffect} from 'react';

const PokemonList = ({pokeList, selectPokemon}) => {


    return(
        <>
            <select onChange={selectPokemon}>
                <option key={0} value=""> Select pokemon</option>
                {
                    pokeList.map((pokemon,i) =>{
                        return(
                            <option key={i+1} value={i+1}>
                                {`00${i+1} - ${pokemon.name}`}
                            </option>
                        ); 
                    })
                }
            </select>
        </>
    );
}

export default PokemonList;