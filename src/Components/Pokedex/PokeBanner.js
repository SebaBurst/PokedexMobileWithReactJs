import { useState } from 'react';
import '../../Css/pokebanner.css'

function PokeBanner({ setNationalDex, setSearchList, searchList2, setHome, setSearch, setPokemonEntry }) {

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  function searchPokemon(texto) {
    if (searchList2.length > 1000) {
      const nuevaLista = searchList2.filter(pokemon => {
        const nombrePokemon = (pokemon.name || '').toLowerCase(); // Verificar si pokemon.name está definido
        return nombrePokemon.includes((texto || '').toLowerCase()); // Verificar si texto está definido
      });
      setSearchList(nuevaLista);
      console.log("nueva lista")
      console.log(nuevaLista)

    }
  }


  const handleChange = event => {
      setSearch(true)
      setMessage(event.target.value);
      setNationalDex(true)
      setHome(false)
      setPokemonEntry(true)
      searchPokemon(event.target.value)
    
  };
  return (
    <div>
      <div className='bannerBg'>
        <div className='pokeball_icon'>
          <img src={'https://cdn-icons-png.flaticon.com/512/361/361998.png'} />

        </div>
        <div className='poke-bar'>
          <input className="input-pokesearch" type="text" placeholder="Buscar Pokemon" onChange={handleChange}
          />
        </div>

      </div>
    </div>
  )
}

export default PokeBanner