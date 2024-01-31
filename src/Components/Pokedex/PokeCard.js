import React from 'react'
import Artwork from '../../Assets/935.png'
import '../../Css/pokecard.css'
import PokeEntry from './PokeEntry';
function PokeCard({key, art, name, number, type, setPokemonEntry, setSelectedPokemon}) {
  const divStyle = {
    backgroundImage: `url(${art})`,
  };
  let bgtype = "#ffffff";
  let h1type = "000000";

  function goEntry(e){
    setPokemonEntry(false);
    setSelectedPokemon(number);

  }


  if(type == "fire"){
    bgtype = "#fcefe6"
    h1type = "#df590d"

  }
  else if(type ==  "water"){
    bgtype = "#c2e3ff";
    h1type = "#2a7dc8";

  }
  else if(type ==  "grass"){
    bgtype = "#bafce6";
    h1type = "#13a05a";
  }
  else if(type ==  "normal"){
    bgtype = "#B8A9A8";
    h1type = "#3b3b3b"
  }
  else if(type ==  "poison"){
    bgtype = "#BB8FCE";
    h1type = "#3E1F45"
  }
  else if(type ==  "flying"){
    bgtype = "#B5A2FF";
    h1type = "#563F89";
  }
  else if(type ==  "electric"){
    bgtype = "#fdf7e1";
    h1type = "#d5b20e";

  }
  else if(type ==  "bug"){
    bgtype = "#eafed7";
    h1type = "#72902f";

  }
  else if(type ==  "fairy"){
    bgtype = "#fce6fa";
    h1type = "#81438e";

  }

  else if(type ==  "dark"){
    bgtype = "#686868";
  }
  else if(type ==  "dragon"){
    bgtype = "#636AFB";
    h1type = "#182E56"
  }
  else if(type ==  "rock"){
    bgtype = "#AE9661";
    h1type = "#5A511D";

  }
  else if(type ==  "ground"){
    bgtype = "#DEB75F";
    h1type = "#87521A"
  }
  else if(type == "ghost"){
    bgtype = "#AC7AC6";
    h1type = "#311856"
  }
  else if(type == "psychic"){
    bgtype = "#ffdfe1";
    h1type = "#d13a42"
  }
  else if(type == "steel"){
    bgtype = "#AFAEAE";
    h1type = "#3b3b3b";

  }
  else if(type == "fighting"){
    bgtype = "#D6B7B6";
    h1type = "#7E3823";
  }
  else if(type == "ice"){
    bgtype = "#C0F5FC";
    h1type = "#2E688A";
  }








  const divbg = {
    backgroundColor: bgtype,
  };
  return (
    <div className='pokecardBg' style={divbg} onClick={goEntry} >

      <div className='poke-info' >
        <h1 style={{color:h1type}}>{number}</h1>
        <p>{name.toUpperCase()}</p>
      </div>
      <div className='image-container' style={divStyle}>

      </div>

    </div>
  )
}

export default PokeCard