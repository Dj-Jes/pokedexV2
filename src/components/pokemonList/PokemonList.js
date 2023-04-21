import React from 'react';
import Pokemon from '../pokemon/Pokemon';

export default function PokemonList({ pokemons, onItemClick }) {
  return (
    <div className="pokemonContainer">
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} onClick={() => onItemClick(pokemon.id)} />
      ))}
    </div>
  );
}