import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from "./SearchBar";
import Card from './Card';
import './Card.css';
import './SearchBar.css';
import CustomHeader from './CustomHeader';
import './PopUp.css';
import './CustomHeader.css'

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        const pokemonList = response.data.results;

        // Obtener detalles de cada Pokémon individualmente
        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );

        setPokemonData(detailedPokemonList);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <CustomHeader title={"1ra Generación"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"} />
      <SearchBar label={"Nombre del Pokémon"} />
      <div className="Cards">
        {pokemonData.map((pokemon, index) => (
          <Card
            key={index}
            url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            title={pokemon.name}
            description={`#${index + 1}`}  
            details={
              <>
                <div>{`Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`}</div>
                <div>{`Peso: ${pokemon.weight / 10} kg`}</div>
                <div>{`Altura: ${pokemon.height / 10} m`}</div>
                <div>{`Experiencia Base: ${pokemon.base_experience}`}</div>
                <div>{`Primer Movimiento: ${pokemon.moves.length > 0 ? pokemon.moves[0].move.name : 'N/A'}`}</div>
              </>
            }
            txtBtn={'Ver Detalles'}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
