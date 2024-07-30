import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from './Box.jsx';

function Api() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);  // Added loading state

    useEffect(() => {
        async function fetchPokemonList() {
            try {
                // Fetch the list of Pokemon
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000'); 
                const pokemonResults = response.data.results;
                console.log('Pokemon list fetched:', pokemonResults); 

                // Fetch details for each Pokemon
                const pokemonDetails = await Promise.all(
                    pokemonResults.map(async (pokemon) => {
                        const pokemonData = await axios.get(pokemon.url);
                        const data = pokemonData.data;
                        const id = data.id;
                        const name = data.name;
                        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
                        const image = data.sprites.front_default;
                        const type = data.types.map(typeInfo => typeInfo.type.name);

                        return { id,name, hp, image, type };
                    })
                );

                pokemonDetails.sort((a,b)=>a.id - b.id);
                setPokemonList(pokemonDetails);
                setLoading(false);  
            } catch (error) {
                console.error('Error fetching the Pokemon data', error);
                setLoading(false); 
            }
        }

        fetchPokemonList();
    }, []);

    return (
        <div className='pokemon-list'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemonList.length > 0 ? (
                    pokemonList.map((pokemon, index) => (
                        <Box
                            id = {pokemon.id}
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

export default Api;
