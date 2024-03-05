import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar";
import Card from './Card';
import './Card.css';
import './SearchBar.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/originals/95/f3/4e/95f34e9bc588226a8c91a1be5bbebd67.png" width="45px" height="45px" alt="Logo"></img>
        <h1>Pokémon de la 1ra Generación</h1>
      </header>
      <SearchBar label={"Nombre del Pokémon"} />
      <div className="Cards">
        {pokemonData.map((pokemon, index) => (
          <Card
            key={index}
            url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            title={pokemon.name}
            description={`#${index + 1}`}
            txtBtn={'Ver Detalles'}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
