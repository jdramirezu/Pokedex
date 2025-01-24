import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Pokedex.css'
import PokemonPic from './PokemonPic.jsx'
import Pokedex from './Pokedex.jsx';

function App() {
  const [pokemon, setPokemon] = useState();
      
  useEffect( () => {
    fetch('https://pokeapi.co/api/v2/pokemon/25/')
    .then(response => response.json())
    .then(data => setPokemon(data));
  },[]);
  
  return !pokemon ?
    <h1>Loading</h1> :
    (
      <div >
        <Pokedex pokemon = {pokemon}/>
      </div>
    );
}

export default App;
