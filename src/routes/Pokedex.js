import React, { useState, useEffect } from 'react';
import PokemonList from '../components/pokemonList/PokemonList';
/*import PokemonInfo from '../components/pokemonInfo/PokemonInfo';*/
import './Pokedex.css';
import PokemonOverlay from "../components/pokemonOverlay/PokemonOverlay";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pageId, setPageId] = useState(0);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${16 * pageId}`)
            .then(response => response.json())
            .then(data => {
                Promise.all(data.results.map(async (result) => {
                    const pokemonResponse = await fetch(result.url);
                    return pokemonResponse.json();
                })).then(data => setPokemons(data))
            });
    }, [pageId]);

    const handleItemClick = (id) => {
        console.log(`Clicked on pokemon with id ${id}`);
        const pokemon = pokemons.find(p => p.id === id);
        setSelectedPokemon(pokemon);
    };

    const handleNextPageClick = () => {
        setPageId(pageId + 1);
    }
    const handlePreviousPageClick = () => {
            if (pageId !== 0) {
                setPageId(pageId - 1);
            }
            console.log("You are on page "+ pageId +" And cant go back"  )
    }

    return (
        <div className="pokedex">
            <div className="pokedexTitle">
                <img src={require('../components/img/img.png')} alt="Pokemon"/>
            </div>
            <PokemonList pokemons={pokemons} onItemClick={handleItemClick} />
            <button className="next-page-button" onClick={handleNextPageClick}>Next Page</button>
            <button className="next-prev-button" onClick={handlePreviousPageClick}>Previous Page</button>
            {/*{<PokemonInfo pokemon={selectedPokemon} />}*/}
            {selectedPokemon && <PokemonOverlay pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
        </div>
    );
};

/*ctrl+shift+/ for auto comment*/

export default Pokedex;
