import React, { useState, useEffect } from 'react'
import '../../Css/gymleader.css'

import Artyom from 'artyom.js'

function GymCard({ name, type, art, description, region, setSplash, setBgSplash, setDSplash, setNameSplash, setH1Color, setArtwork, artwork }) {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [audioSrc, setAudioSrc] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const divStyle = {
    backgroundImage: `url(${art})`,
  };
  

  let pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/52/latest/20221208180543/Tipo_acero_EP.png/80px-Tipo_acero_EP.png"
  let bgtype = "#ffffff";
  let h1type = "000000";
  if (type == "Fuego") {
    bgtype = "#fcefe6"
    h1type = "#df590d"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/80px-Tipo_fuego_EP.png"

  }
  else if (type == "Agua") {
    bgtype = "#c2e3ff";
    h1type = "#2a7dc8";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/59/latest/20221208180426/Tipo_agua_EP.png/80px-Tipo_agua_EP.png"


  }
  else if (type == "Planta") {
    bgtype = "#bafce6";
    h1type = "#13a05a";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a7/latest/20221208180710/Tipo_planta_EP.png/80px-Tipo_planta_EP.png"

  }
  else if (type == "Normal") {
    bgtype = "#B8A9A8";
    h1type = "#3b3b3b"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20221208180705/Tipo_normal_EP.png/80px-Tipo_normal_EP.png"

  }
  else if (type == "Veneno") {
    bgtype = "#BB8FCE";
    h1type = "#3E1F45"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/11/latest/20221208180751/Tipo_veneno_EP.png/80px-Tipo_veneno_EP.png"

  }
  else if (type == "Volador") {
    bgtype = "#B5A2FF";
    h1type = "#563F89";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20221208180800/Tipo_volador_EP.png/80px-Tipo_volador_EP.png"

  }
  else if (type == "Electrico") {
    bgtype = "#fdf7e1";
    h1type = "#d5b20e";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png/80px-Tipo_el%C3%A9ctrico_EP.png"


  }
  else if (type == "Bicho") {
    bgtype = "#eafed7";
    h1type = "#72902f";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5d/latest/20221208180434/Tipo_bicho_EP.png/80px-Tipo_bicho_EP.png"


  }
  else if (type == "Hada") {
    bgtype = "#fce6fa";

    h1type = "#81438e";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/97/latest/20221208180633/Tipo_hada_EP.png/80px-Tipo_hada_EP.png"


  }

  else if (type == "Siniestro") {
    bgtype = "#686868";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/de/latest/20221208180734/Tipo_siniestro_EP.png/80px-Tipo_siniestro_EP.png"

  }
  else if (type == "Dragon") {
    bgtype = "#636AFB";
    h1type = "#182E56"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png/80px-Tipo_drag%C3%B3n_EP.png"

  }
  else if (type == "Roca") {
    bgtype = "#AE9661";
    h1type = "#5A511D";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/88/latest/20221208180726/Tipo_roca_EP.png/80px-Tipo_roca_EP.png"


  }
  else if (type == "Tierra") {
    bgtype = "#DEB75F";
    h1type = "#87521A"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c9/latest/20221208180742/Tipo_tierra_EP.png/80px-Tipo_tierra_EP.png"

  }
  else if (type == "Fantasma") {
    bgtype = "#AC7AC6";
    h1type = "#311856"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/03/latest/20221208180503/Tipo_fantasma_EP.png/80px-Tipo_fantasma_EP.png"

  }
  else if (type == "Psiquico") {
    bgtype = "#ffdfe1";
    h1type = "#d13a42"
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png/80px-Tipo_ps%C3%ADquico_EP.png"

  }
  else if (type == "Acero") {
    bgtype = "#AFAEAE";
    h1type = "#3b3b3b";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/52/latest/20221208180543/Tipo_acero_EP.png/80px-Tipo_acero_EP.png"


  }
  else if (type == "Lucha") {
    bgtype = "#D6B7B6";
    h1type = "#7E3823";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5f/latest/20221208180651/Tipo_lucha_EP.png/80px-Tipo_lucha_EP.png"

  }
  else if (type == "Hielo") {
    bgtype = "#C0F5FC";
    h1type = "#2E688A";
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/17/latest/20221208180641/Tipo_hielo_EP.png/80px-Tipo_hielo_EP.png"

  }

  if (name == "Iris") {
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png/80px-Tipo_drag%C3%B3n_EP.png"

  }
  else if (name == "Lance") {
    pokeIcon = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png/80px-Tipo_drag%C3%B3n_EP.png"

  }
  const divbg = {
    backgroundColor: bgtype,
  };



  const handleSpeak = (text) => {
    setSplash(true)
    setBgSplash(bgtype)
    setDSplash(description)
    setNameSplash(name)
    setArtwork(artwork)
    setH1Color(h1type)
  };
  let pokevoice = "";



  const handleClick = async () => {
    const texto = 'Hola, soy Pikachu'; // Tu texto para convertir en voz

    const response = await fetch(`https://texttospeech.googleapis.com/tts/v1/text:synthesize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_GOOGLE_CLOUD_API_KEY', // Reemplaza con tu API key
      },
      body: JSON.stringify({
        input: { text: texto },
        voice: { languageCode: 'es-ES', name: 'es-ES-Standard-A' }, // Cambia según el idioma y voz que prefieras
        audioConfig: { audioEncoding: 'MP3' }, // Puedes cambiar el formato de audio si lo prefieres
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const audioContent = data.audioContent;

      // Crear un objeto Blob del contenido de audio
      const blob = new Blob([new Uint8Array(atob(audioContent).split('').map((char) => char.charCodeAt(0)))], {
        type: 'audio/mpeg',
      });

      // Crear una URL para el blob
      const audioUrl = URL.createObjectURL(blob);
      setAudioSrc(audioUrl);

      // Crear un enlace de descarga para el archivo de audio
      const downloadUrl = URL.createObjectURL(blob);
      setDownloadLink(downloadUrl);
    }
  };
  if (region == "Alola") {
    pokevoice =
      "Capitán del Recorrido Insular " +
      name +
      ",, " +
      description +
      " Especialista en el Tipo " +
      type;
  }
  else if (region == "Ocho") {
    pokevoice =
      "Participante del Torneo de los Ocho Maestros   " + ",,"+
      name +
      ",, " +
      description +
      " Su Pokemon Característico es de Tipo " +
      type;
  }
  else {
    pokevoice =
      "Líder de Gimnasio " +
      name +
      ",, " +
      description +
      ", " +
      " Especialista en el Tipo " +
      type;

  }




  
  return (
    <div className='gymCardBg' onClick={() => handleSpeak(pokevoice)} style={divbg} >
      <div className='image-container-gym' style={divStyle}></div>
      <div className='gym-info'>
      
        <h1 style={{ color: h1type }}>{name}</h1>
        <p>{description}</p>
        <img src={pokeIcon}></img>
      </div>

    </div>
  )
}

export default GymCard