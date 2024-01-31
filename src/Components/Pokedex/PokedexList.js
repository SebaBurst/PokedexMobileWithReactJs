import React, { useState, useEffect } from 'react';
import '../../Css/pokedex.css';
import PokeCard from './PokeCard';
import Phone from '../../Assets/rotomphone.gif'
import PokeEntry from './PokeEntry';

function PokedexList({ min, max, setPokemonEntry, pokemonEntry, pokeForms, search, searchList }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(1);
  console.log("Nueva lista en lista")
  console.log("Search: " + search)
  console.log(searchList)
  console.log("############################")
  console.log("pokeEntry: " + pokemonEntry)
  console.log("pokeFomrs" + pokeForms)


  function filterForms(tempList) {
    const newList = tempList.filter(pokemon => {
      const namePoke = pokemon.name;
      return namePoke.includes("-alola")
    })
  }
  useEffect(() => {
    console.log("Entre" + pokemonEntry)
    if (search == false) {
      const fetchPokemonList = async () => {
        try {
          setLoading(true);

          const promises = [];
          for (let i = min; i <= max; i++) {
            promises.push(
              fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => response.json())
                .catch(error => {
                  console.error('Error fetching Pokémon data:', error);
                  return {}; // Si hay un error, retornar un objeto vacío
                })
            );
          }

          const tempList = await Promise.all(promises);

          if (pokeForms) {
            const newList = tempList.filter(pokemon => {
              const namePoke = pokemon.name;
              return namePoke.includes("-alola") || namePoke.includes("-galar") || namePoke.includes("-hisui") || namePoke.includes("-paldea");
            });
            console.log(newList)

            setPokemonList(newList)
          }
          else {
            setPokemonList(tempList);

          }
          if (search) {
            setPokemonList(searchList)
          }

        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          setPokemonList([]);
        } finally {
          setLoading(false);
        }
      };

      fetchPokemonList();
    }
    else {
      setLoading(false);
    }
  }, [min, max]);


  useEffect(() => {
    const activateAnimation = () => {
      const gridItems = document.querySelectorAll('.pokeItem');
      gridItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('active');
        }, index * 100); // Añade un retraso incremental para cada elemento
      });
    };
    // Activar la animación después de 500ms (0.5 segundos) cuando el componente se monte
    const animationTimeout = setTimeout(() => {
      activateAnimation();
    }, 300);

    // Limpiar el timeout al desmontar el componente
    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <>
      {loading ? (
        <div className='update-rotom'>
          <img src='https://i.pinimg.com/originals/05/91/6f/05916fa84c88b5c9d4ef210c2802f240.gif'></img>

        </div>
      ) : (
        <div>
          {pokemonEntry && pokeForms === false && search === false ? (
            <div className='pokemonList'>
              {pokemonList.map((pokemon, index) => (
                <div style={{ width: '100%' }} key={index}>
                  {pokemon.name ? (
                    <PokeCard
                      setSelectedPokemon={setSelectedPokemon}
                      setPokemonEntry={setPokemonEntry}
                      key={pokemon.id}
                      name={pokemon.name}
                      number={pokemon.id}
                      art={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default ||  ''}
                      type={pokemon.types.length > 0 ? pokemon.types[0].type.name : ''}
                    />
                  ) : (
                    <div>Error al cargar el Pokémon</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Aquí hay un problema con la estructura del operador ternario, intentemos reorganizarlo
            <div>
              {pokemonEntry  && pokeForms === false && search === true ? (
                <div>
                  <div className='pokemonList'>
                      {searchList.map((pokemon, index) => (
                        <div style={{ width: '100%' }} key={index}>
                          {pokemon.name ? (
                            <PokeCard
                              setSelectedPokemon={setSelectedPokemon}
                              setPokemonEntry={setPokemonEntry}
                              key={pokemon.id}
                              name={pokemon.name}
                              number={pokemon.id}
                              art={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default ||  ''}
                              type={pokemon.types.length > 0 ? pokemon.types[0].type.name : ''}
                            />
                          ) : (
                            <div>Error al cargar el Pokémon DE aLOLA</div>
                          )}
                        </div>
                      ))}
                    </div>
                </div>
              ) : (
                <div>
                  {pokemonEntry === false && pokeForms === false ? (
                    <PokeEntry selectedPokemon={selectedPokemon} />
                  ) : (
                    // Esta parte parece repetir la lógica anterior, considera revisarla
                    <div className='pokemonList'>
                      {pokemonList.map((pokemon, index) => (
                        <div style={{ width: '100%' }} key={index}>
                          {pokemon.name ? (
                            <PokeCard
                              setSelectedPokemon={setSelectedPokemon}
                              setPokemonEntry={setPokemonEntry}
                              key={pokemon.id}
                              name={pokemon.name}
                              number={pokemon.id}
                              art={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other['official-artwork'].front_default ||  ''}
                              type={pokemon.types.length > 0 ? pokemon.types[0].type.name : ''}
                            />
                          ) : (
                            <div>Error al cargar el Pokémon DE aLOLA</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

      )}
    </>

  );
}

export default PokedexList;
