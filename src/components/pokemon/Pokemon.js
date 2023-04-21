import React from 'react';

const Pokemon = ({ pokemon, onClick }) => {
    const { id, name, types } = pokemon;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="pokemonCard" onClick={onClick}>
            <div className="pokemon-number">{"#" + id}</div>
            <div className="pokemonImg">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="pokemonInfo">
                <h3 className="pokemonName">{name}</h3>
                <ul className="pokemonTypes">
                    {types.map((type, index)     => (
                        <li
                            key={index}
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

export default Pokemon;
