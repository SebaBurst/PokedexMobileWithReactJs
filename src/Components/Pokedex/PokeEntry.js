import React, { useState, useEffect } from 'react';
import Artyom from 'artyom.js'
import VoiceRotom from '../../Assets/voice.jpg'
import '../../Css/pokeentry.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { FaRightLong } from "react-icons/fa6";

function PokeEntry({ selectedPokemon }) {

  const [pokemon, setPokemon] = useState(null)
  const [pokemonDescription, setPokemonDescription] = useState("")
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [evolution, setEvoution] = useState("")
  const [specie, setSpecie] = useState("")
  const [typeOne, setTypeOne] = useState("")
  const [pokename, setPokename] = useState("")
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);
  const [spriteNext, setNext] = useState(null);
  const [spritePrev, setPrev] = useState(null);
  const [form1, setForm1] = useState(null);
  const [form2, setForm2] = useState(null);
  const [form3, setForm3] = useState(null);

  
  let bgtype = "red";
  let h1type = "000000";

  //call Pokemon



  function typePokemon(data) {
    setType1(null);
    setType2(null);
    console.log("nombre tipo 1" + data.types[0].type.name)
    if (data.types[0].type.name == "fire") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/c/ca/latest/20230109195240/Tipo_fuego_LGPE.png")

    }
    else if (data.types[0].type.name == "water") {
      setType1('https://images.wikidexcdn.net/mwuploads/wikidex/9/98/latest/20230109195159/Tipo_agua_LGPE.png')
    }
    else if (data.types[0].type.name == "grass") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20230109195306/Tipo_planta_LGPE.png")
    }
    else if (data.types[0].type.name == "poison") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/latest/20230109195408/Tipo_veneno_LGPE.png")
    }
    else if (data.types[0].type.name == "fairy") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20230109195247/Tipo_hada_LGPE.png")
    }
    else if (data.types[0].type.name == "steel") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/8/85/latest/20230108233548/Tipo_acero_LGPE.png")
    }
    else if (data.types[0].type.name == "electric") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20230109195224/Tipo_eléctrico_LGPE.png")
    }
    else if (data.types[0].type.name == "ghost") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20230109195232/Tipo_fantasma_LGPE.png")
    }
    else if (data.types[0].type.name == "rock") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/8/83/latest/20230109195354/Tipo_roca_LGPE.png")
    }
    else if (data.types[0].type.name == "ground") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/1/1f/latest/20230109195401/Tipo_tierra_LGPE.png")
    }
    else if (data.types[0].type.name == "normal") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/2/2b/latest/20230109195344/Tipo_normal_LGPE.png")
    }
    else if (data.types[0].type.name == "ice") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/0/05/latest/20230109195254/Tipo_hielo_LGPE.png")
    }
    else if (data.types[0].type.name == "dragon") {
      setType1('https://images.wikidexcdn.net/mwuploads/wikidex/5/58/latest/20230109195214/Tipo_dragón_LGPE.png')
    }
    else if (data.types[0].type.name == "fighting") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20230109195336/Tipo_lucha_LGPE.png")
    }
    else if (data.types[0].type.name == "bug") {
      setType1('https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20230109195207/Tipo_bicho_LGPE.png')
    }
    else if (data.types[0].type.name == "flying") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/8/8d/latest/20230109195416/Tipo_volador_LGPE.png")
    }
    else if (data.types[0].type.name == "psychic") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20230109195316/Tipo_psíquico_LGPE.png")
    } else if (data.types[0].type.name == "dark") {
      setType1("https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20230109195325/Tipo_siniestro_LGPE.png")
    }
    else {
      setType1(null)
    }




    if (data.types.length > 1) {
      if (data.types[1].type.name == "fire") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/c/ca/latest/20230109195240/Tipo_fuego_LGPE.png")

      }
      else if (data.types[1].type.name == "water") {
        setType2('https://images.wikidexcdn.net/mwuploads/wikidex/9/98/latest/20230109195159/Tipo_agua_LGPE.png')
      }
      else if (data.types[1].type.name == "grass") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20230109195306/Tipo_planta_LGPE.png")
      }
      else if (data.types[1].type.name == "poison") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/latest/20230109195408/Tipo_veneno_LGPE.png")
      }
      else if (data.types[1].type.name == "fairy") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20230109195247/Tipo_hada_LGPE.png")
      }
      else if (data.types[1].type.name == "steel") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/8/85/latest/20230108233548/Tipo_acero_LGPE.png")
      }
      else if (data.types[1].type.name == "electric") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20230109195224/Tipo_eléctrico_LGPE.png")
      }
      else if (data.types[1].type.name == "ghost") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20230109195232/Tipo_fantasma_LGPE.png")
      }
      else if (data.types[1].type.name == "rock") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/8/83/latest/20230109195354/Tipo_roca_LGPE.png")
      }
      else if (data.types[1].type.name == "ground") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/1/1f/latest/20230109195401/Tipo_tierra_LGPE.png")
      }
      else if (data.types[1].type.name == "normal") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/2/2b/latest/20230109195344/Tipo_normal_LGPE.png")
      }
      else if (data.types[1].type.name == "ice") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/0/05/latest/20230109195254/Tipo_hielo_LGPE.png")
      }
      else if (data.types[1].type.name == "dragon") {
        setType2('https://images.wikidexcdn.net/mwuploads/wikidex/5/58/latest/20230109195214/Tipo_dragón_LGPE.png')
      }
      else if (data.types[1].type.name == "fighting") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20230109195336/Tipo_lucha_LGPE.png")
      }
      else if (data.types[1].type.name == "bug") {
        setType2('https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20230109195207/Tipo_bicho_LGPE.png')
      }
      else if (data.types[1].type.name == "flying") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/8/8d/latest/20230109195416/Tipo_volador_LGPE.png")
      }
      else if (data.types[1].type.name == "psychic") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20230109195316/Tipo_psíquico_LGPE.png")
      } else if (data.types[1].type.name == "dark") {
        setType2("https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20230109195325/Tipo_siniestro_LGPE.png")
      }
      else {
        setType2(null)
      }
    }
  }


  //add conditions for first and last pokemon
  function goNext() {

    let selected = pokemon.id
    if (pokemon.id == 1017) {
      selected = 1;
    }
    else {
      selected = pokemon.id + 1
    }

    goNextSprite(selected + 1)
    goPrevSprite(selected - 1)
    loadNext(selected)
    loadInfo(selected)
  }

  function goPrev() {
    let selected = pokemon.id
    if (pokemon.id == 1) {
      selected = 1017;
    }
    else {
      selected = pokemon.id - 1
    }

    goNextSprite(selected + 1)
    goPrevSprite(selected - 1)
    loadNext(selected)
    loadInfo(selected)
  }


  function loadNext(select) {


    fetch(`https://pokeapi.co/api/v2/pokemon/${select}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        let type1 = data.types[0].type.name
        typePokemon(data)
        bgSelector(type1)
        setPokemon(data)


      })
      .catch(err => {

      })
  }


  function loadEvolve1(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {

        console.log("Eovlu: " + name)
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();

        console.log("data" + data.name)
        setForm1(data)


      })
      .catch(err => {

      })

  }


  function loadEvolve2(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {

        console.log("Eovlu: " + name)
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();

        console.log("data" + data.name)
        setForm2(data)


      })
      .catch(err => {

      })

  }


  function loadEvolve3(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {

        console.log("Eovlu: " + name)
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();

        console.log("data" + data.name)
        setForm3(data)


      })
      .catch(err => {

      })

  }
  function evolution_chain(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {


        console.log("Inicio: " + data.chain.species.name);
        loadEvolve1(data.chain.species.name);
        if (data.chain.evolves_to.length >= 1) {
          console.log("Medio:" + data.chain.evolves_to[0].species.name)
          loadEvolve2(data.chain.evolves_to[0].species.name)
          if (data.chain.evolves_to[0].evolves_to.length >= 1) {
            console.log("Final:" + data.chain.evolves_to[0].evolves_to[0].species.name)
            loadEvolve3(data.chain.evolves_to[0].evolves_to[0].species.name)
          }
        }


        console.log(data)
      })
  }
  function loadInfo(select) {
    setForm1(null)
    setForm2(null)
    setForm3(null)
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${select}`)
      .then(res => res.json())
      .then(data => {

        evolution_chain(data.evolution_chain.url)
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        const consola = data.flavor_text_entries.find((text) => text.language.name == "es")


        const evolveFrom = data.evolves_from_species

        if (evolveFrom != null) {
          setEvoution(evolveFrom.name)
        }

        const consola2 = data.genera.find((text) => text.language.name == "es")
        setSpecie(consola2.genus)


        setPokemonDescription(consola.flavor_text)
      })
      .catch(err => {

      })

  }

  function bgSelector(type) {
    if (type == "fire") {
      bgtype = "#fcefe6"
      h1type = "#df590d"

    }
    else if (type == "water") {
      bgtype = "#c2e3ff";
      h1type = "#2a7dc8";

    }
    else if (type == "grass") {
      bgtype = "#bafce6";
      h1type = "#13a05a";
    }
    else if (type == "normal") {
      bgtype = "#B8A9A8";
      h1type = "#3b3b3b"
    }
    else if (type == "poison") {
      bgtype = "#BB8FCE";
      h1type = "#3E1F45"
    }
    else if (type == "flying") {
      bgtype = "#B5A2FF";
      h1type = "#563F89";
    }
    else if (type == "electric") {
      bgtype = "#fdf7e1";
      h1type = "#d5b20e";

    }
    else if (type == "bug") {
      bgtype = "#eafed7";
      h1type = "#72902f";

    }
    else if (type == "fairy") {
      bgtype = "#fce6fa";
      h1type = "#81438e";

    }

    else if (type == "dark") {
      bgtype = "#686868";
    }
    else if (type == "dragon") {
      bgtype = "#636AFB";
      h1type = "#182E56"
    }
    else if (type == "rock") {
      bgtype = "#AE9661";
      h1type = "#5A511D";

    }
    else if (type == "ground") {
      bgtype = "#DEB75F";
      h1type = "#87521A"
    }
    else if (type == "ghost") {
      bgtype = "#AC7AC6";
      h1type = "#311856"
    }
    else if (type == "psychic") {
      bgtype = "#ffdfe1";
      h1type = "#d13a42"
    }
    else if (type == "steel") {
      bgtype = "#AFAEAE";
      h1type = "#3b3b3b";

    }
    else if (type == "fighting") {
      bgtype = "#D6B7B6";
      h1type = "#7E3823";
    }
    else if (type == "ice") {
      bgtype = "#C0F5FC";
      h1type = "#2E688A";
    }

    console.log(type)

    setTypeOne(bgtype)
    setPokename(h1type)

  }



  function goNextSprite(select) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${select}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        setNext(data.sprites.front_default)
      })
      .catch(err => {

      })
  }

  function goPrevSprite(select) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${select}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        setPrev(data.sprites.front_default)
      })
      .catch(err => {

      })
  }
  const divbg = {
    backgroundColor: bgtype,
  };

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        let type1 = data.types[0].type.name
        typePokemon(data)


        //typePokemon(data)
        bgSelector(type1)
        setPokemon(data)


      })
      .catch(err => {

      })
  }, [selectedPokemon])


  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon + 1}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        setNext(data.sprites.front_default)
      })
      .catch(err => {

      })
  }, [selectedPokemon])



  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon - 1}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        data.name = data.name.toUpperCase();
        setPrev(data.sprites.front_default)
      })
      .catch(err => {

      })
  }, [selectedPokemon])


  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
      .then(res => res.json())
      .then(data => {

        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        evolution_chain(data.evolution_chain.url)
        const consola = data.flavor_text_entries.find((text) => text.language.name == "es")


        const evolveFrom = data.evolves_from_species

        if (evolveFrom != null) {
          setEvoution(evolveFrom.name)
        }

        const consola2 = data.genera.find((text) => text.language.name == "es")
        setSpecie(consola2.genus)



        setPokemonDescription(consola.flavor_text)
      })
      .catch(err => {

      })
  }, [selectedPokemon])





  return (
    <div className='pokeEntry' style={{ backgroundColor: typeOne }}>
      {pokemon && form1 ? (
        <div>
          <div className='moveDex'>
            <div className="button-next" onClick={goPrev}> <img src={spritePrev} />  <p style={{ color: pokename }}>#{pokemon.id - 1}</p>  </div>
            <div className="button-next" onClick={goNext}><img src={spriteNext} /> <p style={{ color: pokename }}>#{pokemon.id + 1}</p></div >

          </div>



          <div className='pokemon-information'>
            <div className='poke-name1'>
              <div className='number-poke1'>
                <h1 style={{ color: pokename }}>#{pokemon.id}</h1>

              </div>

              <div className='poke-name_inside1'>



              </div>
            </div>

            <div className='pokemonArt'>
              <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name}-artwork`} />
            </div>

            <div className='pokemon-name'>
              <h1 style={{ color: pokename }}>{pokemon.name} </h1>
              <p style={{ color: pokename }}>{specie}</p>
            </div>

          </div>


          <div className='pokemon-details'>
            <div className='types'>
              <img src={type1} />
              {type2 && <img src={type2} />}
            </div>
            <div className='pokemonDes'>
              <p style={{ color: '#414141' }}>{pokemonDescription}</p>
            </div>

            <div className='pokeStats'>
              <p style={{ color: pokename, fontWeight: '600' }}>Estadísticas Base</p>


              <p>Salud <Progress percent={((pokemon.stats[0].base_stat) / 255) * 100} theme={{ success: { color: pokename, symbol: " " } }} status="success" /></p>
              <p>Ataque {pokemon.stats[1].base_stat} <Progress percent={((pokemon.stats[1].base_stat) / 255) * 100} status="success" theme={{ success: { color: pokename, symbol: " " } }} /></p>
              <p>Defensa {pokemon.stats[2].base_stat} <Progress percent={((pokemon.stats[2].base_stat) / 255) * 100} status="success" theme={{ success: { color: pokename, symbol: " " } }} /></p>
              <p>Ataque Especial {pokemon.stats[3].base_stat} <Progress percent={((pokemon.stats[3].base_stat) / 255) * 100} status="success" theme={{ success: { color: pokename, symbol: " " } }} /></p>
              <p>Defensa Especial {pokemon.stats[4].base_stat} <Progress percent={((pokemon.stats[4].base_stat) / 255) * 100} status="success" theme={{ success: { color: pokename, symbol: " " } }} /></p>
              <p>Velocidad {pokemon.stats[5].base_stat} <Progress percent={((pokemon.stats[5].base_stat) / 255) * 100} status="success" theme={{ success: { color: pokename, symbol: " " } }} /></p>


            </div>
            {form1 && form2 == null && form3 == null ? (<div>

            </div>) : (<div><p style={{ color: pokename, fontWeight: '600', marginLeft: '6%' }}>Linea Evolutiva</p> <div className='evolutions' style={{ backgroundColor: typeOne }}>

              <div className='poke-evo'>
                <img src={form1.sprites.front_default} />
                <p style={{ color: pokename }}>{form1.name}</p>
              </div>
              <FaRightLong style={{ color: pokename }} />
              {form2 &&  <div className='poke-evo'>
                <img src={form2.sprites.front_default} />
                <p style={{ color: pokename }}>{form2.name}</p>
              </div>}
              {form2 && form3 ? (<div><FaRightLong style={{ color: pokename }} /> </div>) : (<></>)}
              {form3 &&  <div className='poke-evo'>
                <img src={form3.sprites.front_default} />
                <p style={{ color: pokename }}>{form3.name}</p>
              </div>}

            </div>
            </div>)}






          </div>




        </div>) : (<></>)} </div>

  )
}

export default PokeEntry