import React, { useState, useEffect } from 'react'
import '../Css/rotom.css'
import RotomEyes from './RotomEyes'
import RotomInfo from './RotomInfo'
import sword from '../Assets/tipos/sword.png'
import RotomList from './RotomList'
function Rotomdex() {

    const [search, setSearch] = useState('pikachu'); // Pokémon por defecto
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const [minimo, setMinimo] = useState(1);
    const [max, setMax] = useState(151);
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleSearch = () => {
        if (search.trim() !== '') {
            setSearch(search);
        }
    };
    //                <RotomInfo search={search}  currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon} />


    const selectPokemon = (option) => {
        {
            console.log("Pokemon elegido: " + option)
            setSearch(option);
            setSelector(option);
        }
    }

    async function selectRegion(e, min, max, buttonId) {
        e.preventDefault();
        setMax(max)
        setMinimo(min)
        setActiveButton(buttonId);

    }


    function allPokemon(e) {
        e.preventDefault();
        setSelector('');
    }
    const [selector, setSelector] = useState('');
    return (
        <div>
            <div className='rotombg'>
                <div className='poke-search'>
                    <button className='input-search' onClick={allPokemon}> Todos los Pokémon</button>
                </div>
                <RotomEyes />

                <>
                    {selector ? (
                        <div>
                            <RotomInfo search={search} currentPokemon={currentPokemon} setCurrentPokemon={setCurrentPokemon} />

                        </div>
                    ) : (

                        <div>
                            <div className='filter-buttons'>
                                <button className={activeButton === 'kanto' ? 'active' : ''} onClick={(e) => selectRegion(e, 1, 151, 'kanto')}>Kanto</button>
                                <button className={activeButton === 'jhoto' ? 'active' : ''} onClick={(e) => selectRegion(e, 152, 251, 'jhoto')}>Jhoto</button>
                                <button className={activeButton === 'hoenn' ? 'active' : ''} onClick={(e) => selectRegion(e, 252, 386, 'hoenn')} >Hoenn</button>
                                <button className={activeButton === 'sinnoh' ? 'active' : ''} onClick={(e) => selectRegion(e, 387, 493, 'sinnoh')}>Sinnoh</button>
                                <button className={activeButton === 'unova' ? 'active' : ''} onClick={(e) => selectRegion(e, 494, 649, 'unova')} >Unova</button>
                                <button className={activeButton === 'kalos' ? 'active' : ''} onClick={(e) => selectRegion(e, 650, 721, 'kalos')}>Kalos</button>
                                <button className={activeButton === 'alola' ? 'active' : ''} onClick={(e) => selectRegion(e, 722, 809, 'alola')}>Alola</button>
                                <button className={activeButton === 'galar' ? 'active' : ''} onClick={(e) => selectRegion(e, 810, 905, 'galar')}>Galar</button>
                                <button className={activeButton === 'paldea' ? 'active' : ''} onClick={(e) => selectRegion(e, 906, 1010, 'paldea')}>Paldea</button>
                            </div>
                            <RotomList onSelector={selectPokemon} minimo={minimo} maximo={max} />

                        </div>
                    )


                    }
                </>



            </div>
        </div>
    )
}

export default Rotomdex