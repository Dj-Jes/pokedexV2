import React from 'react';
import './PokemonOverlay.css';
import '../../routes/Pokedex.css'

const PokemonOverlay = ({pokemon, onClose}) => {
    return (
        <div className="pokemonOverlay">
            <div className="pokemonOverlayContent">
                <button className="closeButton" onClick={onClose}>
                    X
                </button>
                <h2>
                    {pokemon.name.toUpperCase()} #{pokemon.id}
                </h2>
                <img className="img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>Height: {pokemon.height} m</p>
                <p>Weight: {pokemon.weight} kg</p>
                <p>Types</p>
                <ul className="pokemonTypes">
                    {pokemon.types.map((type, index) => (
                        <li key={index}
                            className={`pokemonType pokemon-type--${type.type.name.toLowerCase()}`}
                        >
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonOverlay;
