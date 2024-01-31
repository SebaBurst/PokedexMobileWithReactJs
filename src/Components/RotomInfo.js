import React, { useState, useEffect } from 'react'
import '../Css/rotom.css'
import scorbunny from '../Assets/poke.png'
import hada from '../Assets/tipos/hada.svg'
import psiquico from '../Assets/tipos/psiquico.svg'
import electrico from '../Assets/tipos/electrico.svg'
import fuego from '../Assets/tipos/fuego.svg'
import agua from '../Assets/tipos/agua.svg'
import planta from '../Assets/tipos/planta.svg'
import bicho from '../Assets/tipos/bicho.svg'
import roca from '../Assets/tipos/tierra.svg'
import hielo from '../Assets/tipos/hielo.svg'
import dragon from '../Assets/tipos/dragon.svg'
import acero from '../Assets/tipos/acero.svg'
import normal from '../Assets/tipos/normal.svg'
import veneno from '../Assets/tipos/veneno.svg'
import fantasma from '../Assets/tipos/fantasma.svg'
import volador from '../Assets/tipos/volador.svg'
import lucha from '../Assets/tipos/lucha.svg'
import tierra from '../Assets/tipos/tierra.svg'
import siniestro from '../Assets/tipos/siniestro.svg'
















function RotomInfo({search}) {
    
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState(null)
    const [type1, setType1] = useState(null);
    const [type2, setType2] = useState(null);
console.log(search.pokemon)
    const RandomId = Math.floor(Math.random() * 1000 + 1)

    // Inicamos con ID random para siempre tener un pokemón
    const [pokemonID, setPokemonId] = useState(RandomId)
    
    
    useEffect(() => {
       
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(res => res.json())
            .then(data => {
           
                // Si todo esta cool, actualizamos el pokemón
                // Y le indicamos que no hay error
                data.name = data.name.toUpperCase();

                setPokemon(data)
                setType1(null);
                setType2(null);
                console.log("nombre tipo 1" + data.types[0].type.name)
                if(data.types[0].type.name == "fire"){
                    setType1(fuego)

                }
                else if(data.types[0].type.name == "water"){
                    setType1(agua)
                }
                else if(data.types[0].type.name == "grass"){
                    setType1(planta)
                }
                else if(data.types[0].type.name == "poison"){
                    setType1(veneno)
                }
                else if(data.types[0].type.name == "fairy"){
                    setType1(hada)
                }
                else if(data.types[0].type.name == "steel"){
                    setType1(acero)
                }
                else if(data.types[0].type.name == "electric"){
                    setType1(electrico)
                }
                else if(data.types[0].type.name == "ghost"){
                    setType1(fantasma)
                }
                else if(data.types[0].type.name == "rock"){
                    setType1(roca)
                }
                else if(data.types[0].type.name == "ground"){
                    setType1(tierra)
                }
                else if(data.types[0].type.name == "normal"){
                    setType1(normal)
                }
                else if(data.types[0].type.name == "ice"){
                    setType1(hielo)
                }
                else if(data.types[0].type.name == "dragon"){
                    setType1(dragon)
                }
                else if(data.types[0].type.name == "fighting"){
                    setType1(lucha)
                }
                else if(data.types[0].type.name == "bug"){
                    setType1(bicho)
                }
                else if(data.types[0].type.name == "flying"){
                    setType1(volador)
                }
                else if(data.types[0].type.name == "psychic"){
                    setType1(psiquico)
                }else if(data.types[0].type.name == "dark"){
                    setType1(siniestro)
                }
                else{
                    setType1(null)
                }
                
                


                if(data.types[1].type.name == "fire"){
                    setType2(fuego)

                }
                else if(data.types[1].type.name == "water"){
                    setType2(agua)
                }
                else if(data.types[1].type.name == "grass"){
                    setType2(planta)
                }
                else if(data.types[1].type.name == "poison"){
                    setType2(veneno)
                }
                else if(data.types[1].type.name == "fairy"){
                    setType2(hada)
                }
                else if(data.types[1].type.name == "steel"){
                    setType2(acero)
                }
                else if(data.types[1].type.name == "electric"){
                    setType2(electrico)
                }
                else if(data.types[1].type.name == "ghost"){
                    setType2(fantasma)
                }
                else if(data.types[1].type.name == "rock"){
                    setType2(roca)
                }
                else if(data.types[1].type.name == "ground"){
                    setType2(tierra)
                }
                else if(data.types[1].type.name == "normal"){
                    setType2(normal)
                }
                else if(data.types[1].type.name == "ice"){
                    setType2(hielo)
                }
                else if(data.types[1].type.name == "dragon"){
                    setType2(dragon)
                }
                else if(data.types[1].type.name == "fighting"){
                    setType2(lucha)
                }
                else if(data.types[1].type.name == "bug"){
                    setType2(bicho)
                }
                else if(data.types[1].type.name == "flying"){
                    setType2(volador)
                }
                else if(data.types[1].type.name == "psychic"){
                    setType2(psiquico)
                }
                else if(data.types[1].type.name == "dark"){
                    setType2(siniestro)
                }
                else{
                    setType2(null)
                }
                
            
            
                setLoading(false)
                setError(false)
                console.log(data.forms.id)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [search])
    return (
        <>
            {pokemon ? (
                <div>
                    <div className='background-info'>
                        <div className='pokemon-artwork'>
                            
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name}-artwork`} />
                        </div>
                        <div className='poke-data'>
                            <div className='number-poke'>
                            <h1>{pokemon.id} </h1>
                            </div>
                            <div className='poke-name'>
                            <h1>{pokemon.name}</h1>

                            </div>
                        </div>
                        <div className='poke-types'>
                            <img src={type1}></img>
                            <img src={type2}></img>

                        </div>




                    </div>
                </div>
            ) : (
                <div>
                </div>

            )}
        </>
    );



}

export default RotomInfo