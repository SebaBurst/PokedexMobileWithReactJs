import React, { useState, useEffect } from 'react'
import PokeBanner from './PokeBanner'
import PokedexList from './PokedexList'
import '../../Css/pokedex.css'
import PokeRegion from './PokeRegion'
import GymLeaderList from './GymLeaderList'
import TrainerMode from './TrainerMode'
import { MdCatchingPokemon } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import dex from '../../Assets/dexicon.png'
import trainer from '../../Assets/trainericon.png'
import home2 from '../../Assets/homeicon.png';
import Home from './Home'
import National from '../../Assets/card/national.png'

import Trainers from '../../Assets/card/trainers.png'

import Altern from '../../Assets/card/altern.png'
import Mega from '../../Assets/card/mega.png'



function PokedexHome() {
  const [home, setHome] = useState(true);
  const [nationaDex, setNationalDex] = useState(false);
  const [regionalDex, setRegionalDex] = useState(false);
  const [gymLeader, setGymLeader] = useState(false)
  const [gymState, setGymState] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1010);
  const [pokemonEntry, setPokemonEntry] = useState(false)
  const [pokeforms, setPokeforms] = useState(false);
  const [search, setSearch] = useState(false)
  const [searchList, setSearchList] = useState([])
  const [searchPokemon, setSearchPokemon] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 1020; i++) {
          promises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
              .then(response => response.json())
              .catch(error => {
                return {}; // Si hay un error, retornar un objeto vacío
              })
          );
        }

        const tempList = await Promise.all(promises);
        setSearchPokemon(tempList)
      } catch (error) {
        setSearchPokemon([]);
      } finally {
      }
    };

    fetchPokemonList();
  }, []);






  function selectModePokedexRegional(e) {
    e.preventDefault();
    setHome(false)
    setSearch(false)
    setNationalDex(false)
    setGymLeader(false)
    setPokemonEntry(true)
    setRegionalDex(true)
  }

  function selectModePokedexNational(e) {
    e.preventDefault();
    setSearch(false)

    setNationalDex(false)
    setRegionalDex(false)
    setGymLeader(false)
    setHome(true)
    setPokeforms(false)

    setPokemonEntry(true)
    setMin(1);
    setMax(1010);
  }


  function selectModePokedexForms(e) {
    e.preventDefault();
    setNationalDex(true)
    setRegionalDex(false)
    setGymLeader(false)
    setHome(false)
    setPokeforms(true)
    setSearch(false)

    setPokemonEntry(true)

    setMin(10001);
    setPokeforms(true)
    setMax(10277);

  }
  function selectModeGymLeader(e) {
    e.preventDefault();
    setPokemonEntry(false)
    setNationalDex(false)
    setRegionalDex(false)
    setPokeforms(false)
    setSearch(false)

    setGymLeader(true)
    setHome(false)
    setGymState(true)
    setMin(1);
    setMax(1010);
  }

  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
    item.addEventListener('click', activeLink));

  return (
    <div>
      <div className='content'>
        <PokeBanner setHome ={setHome} setNationalDex={setNationalDex} setSearchList={setSearchList} searchList2 ={searchPokemon} setSearch ={setSearch}  setPokemonEntry ={setPokemonEntry}/>
        <div className='bannerGhost'>
        </div>
        <>
          {home == true ? (<div>
            
            <div className='home-cards'>
                <div className='poke-item' onClick={selectModePokedexRegional}>
                    <img src={National} />
                </div>

                <div className='poke-item' onClick={selectModeGymLeader}>
                    <img src={Trainers} />
                </div>
                <div className='poke-item' onClick={selectModePokedexForms} >
                    <img src={Altern} />
                </div>
                <div className='poke-item' onClick={selectModePokedexForms} >
                    <img src={Mega} />
                </div>




            </div>




          
          
          </div>) : nationaDex == true ? (<div>
            <PokedexList setPokemonEntry={setPokemonEntry} pokeForms={pokeforms} searchList ={searchList}
              pokemonEntry={pokemonEntry} min={min} max={max} search ={search} /></div>
          ) : regionalDex === true ? (
            <div>
              <PokeRegion  setPokeforms={setPokeforms} setPokemonEntry={setPokemonEntry} setNationalDex={setNationalDex} setRegionalDex={setRegionalDex} setGymLeader={setGymLeader} setMin={setMin} setMax={setMax} /></div>) : (
            <div>
              <TrainerMode setGymState={setGymState} stateTrainer={gymState} />
            </div>
          )}
        </>

      </div>


      <div class="navigation">
        <ul>
          <li class="list active" onClick={selectModePokedexNational} >
            <a >
              <span class="icon">
                <img src={home2} style={{ width: '60%' }} />
              </span>
              <span class="text">Inicio</span>
            </a>
          </li>

          <li class="list" onClick={selectModePokedexRegional}>
            <a >
              <span class="icon">
                <img src={dex} style={{ width: '60%' }} />
              </span>
              <span class="text">Pokedex</span>
            </a>
          </li>


          <li class="list" onClick={selectModeGymLeader}>
            <a >
              <span class="icon">
                <img src={trainer} style={{ width: '60%' }} />
              </span>
              <span class="text">Entrenadores</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>





    </div>
  )
}

export default PokedexHome