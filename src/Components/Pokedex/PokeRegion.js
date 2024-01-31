import React, { useState, useEffect } from 'react'
import '../../Css/pokedex.css'
import Alola from '../../Assets/regions/alola.png'
import Kanto from '../../Assets/regions/kanto.png'
import Hoenn from '../../Assets/regions/hoenn.png'
import Paldea from '../../Assets/regions/paldea.png'
import Galar from '../../Assets/regions/galar.png'
import Sinnoh from '../../Assets/regions/sinnoh.png'
import Kalos from '../../Assets/regions/kalos.png'
import Johto from '../../Assets/regions/johto.png'
import Unova from '../../Assets/regions/unova.png'
function PokeRegion({ setNationalDex, setRegionalDex, setGymLeader, setMin, setMax, setPokemonEntry, setPokeforms }) {




    useEffect(() => {
        const activateAnimation = () => {
            const gridItems = document.querySelectorAll('.regionCard');
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
    function selectModePokedexNational(e, min, max) {
        e.preventDefault();
        setNationalDex(true)
        setRegionalDex(false)
        setGymLeader(false)
        setMax(max)
        setPokeforms(false)
        setPokemonEntry(true)
        setMin(min)
    }


    return (
        <div className='poke_regions2'>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 1, 151)}>
                <img src={Kanto} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 152, 251)}>
                <img src={Johto} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 252, 386)}>
                <img src={Hoenn} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 387, 493)}>
                <img src={Sinnoh} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 494, 649)}>
                <img src={Unova} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 650, 721)}>
                <img src={Kalos} />
            </div>
            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 722, 809)}>
                <img src={Alola} />
            </div>

            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 810, 905)}>
                <img src={Galar} />
            </div>

            <div className='regionCard' onClick={(e) => selectModePokedexNational(e, 906, 1025)}>
                <img src={Paldea} />
            </div>



        </div>
    )
}

export default PokeRegion