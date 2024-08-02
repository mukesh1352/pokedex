import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from './Box.jsx';
import PropTypes from 'prop-types';

function Api({ searchTerm, typeFilter }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemonList() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
                const pokemonResults = response.data.results;

                const pokemonDetails = await Promise.all(
                    pokemonResults.map(async (pokemon) => {
                        const pokemonData = await axios.get(pokemon.url);
                        const data = pokemonData.data;
                        const id = data.id;
                        const name = data.name;
                        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
                        const image = data.sprites.front_default;
                        const type = data.types.map(typeInfo => typeInfo.type.name);

                        return { id, name, hp, image, type };
                    })
                );

                pokemonDetails.sort((a, b) => a.id - b.id);
                setPokemonList(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the Pokemon data', error);
                setLoading(false);
            }
        }

        fetchPokemonList();
    }, []);

    const filteredPokemonList = pokemonList.filter((pokemon) => {
        const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = typeFilter === '' || pokemon.type.includes(typeFilter);

        return matchesName && matchesType;
    });

    return (
        <div className='pokemon-list'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                filteredPokemonList.length > 0 ? (
                    filteredPokemonList.map((pokemon, index) => (
                        <Box
                            id={pokemon.id}
                            key={index}
                            name={pokemon.name}
                            hp={pokemon.hp}
                            image={pokemon.image}
                            type={pokemon.type}
                        />
                    ))
                ) : (
                    <p>No Pokémon found</p>
                )
            )}
        </div>
    );
}

Api.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    typeFilter: PropTypes.string.isRequired,
};

export default Api;
