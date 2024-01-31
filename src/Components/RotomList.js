import React, { useState, useEffect } from 'react'
import '../Css/rotom.css'
import scorbunny from '../Assets/poke.png'
import rotom from '../Assets/rotom.gif'

function RotomList({ onSelector, minimo, maximo }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    console.log("minimo" + minimo)

    useEffect(() => {
        setPokemonList([]);
        // Función para obtener la lista de Pokémon en el rango deseado
        const fetchPokemonList = async () => {
            const tempList = [];
            for (let i = minimo; i <= maximo; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                if (response.ok) {
                    const data = await response.json();
                    tempList.push(data);
                }
            }
            setPokemonList(tempList);
        };

        fetchPokemonList();
    }, [minimo, maximo]);

    function printId(e, id) {
        e.preventDefault();
        onSelector(id);
        console.log("id: " + id);
    }
    return (
        <>
            {pokemonList.length > 0 ? (
                <div>
                    <div className='background-info'>
                        <div className='scrollActivity'>
                            <div className='background-list'>

                                {pokemonList.map((pokemon, index) => (
                                    <div>
                                    <div className="contenedor">
                                        <img src={pokemon.sprites.other['official-artwork'].front_default} onClick={(e) => printId(e, pokemon.name)} ></img>
                                    </div>
                                    <div>
                                        
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div>
                    <div className='background-info'>
                        <div className='rotom-gif'>
                        <img  src={rotom}></img>

                        </div>
                    </div>

                </div>
            )}

        </>

    )
}

export default RotomList