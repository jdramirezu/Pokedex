import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Pokedex.css'
import Pokedex from './Pokedex.jsx';
import PokemonList from './PokemonList.jsx';

function App() {
  const [pokelist,setPokelist] = useState();
  const [pokemon, setPokemon] = useState();
  

  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=649")
    .then(resp => resp.json())
    .then(list => setPokelist(list.results));
  },[]);
  
  //function to choose pokemon
  const pokeSearch = pokemonIndex =>{
    if(pokemonIndex.target.value != 0){
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex.target.value}/`)
      .then(response => response.json())
      .then(data => setPokemon(data));
    }
  }

  return !pokelist?
    <h1>Loading</h1> :
    (
      <>
        <PokemonList pokeList = {pokelist} selectPokemon = {pokeSearch}/>
        <Pokedex pokemon = {pokemon}/>
      </>
    );
}

export default App;
