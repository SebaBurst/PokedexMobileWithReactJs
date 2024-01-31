import React, { useState, useEffect } from 'react'
import '../../Css/gymleader.css'
import GymCard from './GymCard'
import db from '../../trainers.json'
function GymLeaderList({region, trainer}) {
  const [splash, setSplash] = useState(false)
  const [bgSplash, setBgSplash] = useState("#ffffff");
  const [gymLeaders, setGymLeaders] = useState([]);
  const [nameSplash, setNameSplash] = useState("");
  const [dSplash, setDSplash] = useState("");
  const [artwork, setArtwork] = useState("");
  const [h1Color, setH1Color] = useState("");
  useEffect(() => {
    console.log("Ha llegado" +trainer)
    // Simulando una carga asíncrona desde el archivo JSON
    const fetchData = async () => {
      // Aquí podrías realizar una petición a una API o procesar los datos del archivo
      // En este ejemplo, se utiliza directamente el JSON importado
      const leaders = db['gym_leaders'][region];

      // Verificar si los datos son un objeto y convertirlos en un array
      if (leaders && typeof leaders === 'object') {
        const leadersArray = Object.values(leaders); // Convertir el objeto a un array
        setGymLeaders(leadersArray);
      }
    };

    // Llamar a la función para obtener los datos
    fetchData();
  }, []);


  function splashOff (){
    setSplash(false)
  }
  return (
    <div>
      <div className='gymList'>
        {gymLeaders.map((gym, index) => (
          <GymCard
            setSplash = {setSplash}
            key={index}
            setBgSplash = {setBgSplash}
            setDSplash = {setDSplash}
            setNameSplash = {setNameSplash}
            region={region}
            setH1Color = {setH1Color}
            setArtwork = {setArtwork}
            artwork ={gym.artwork}
            name={gym.nombre}
            type={gym.type}
            art={gym.vsIcon}
            description={gym.description}
          />
        ))}

        

      </div>
      {splash && (
         <div className='bgArt' onClick={splashOff}>
         <div className='container-gym' style={{backgroundColor:bgSplash}}>
          <div className='arTrainer'>
            <img src={artwork} />

          </div>

            <h1 style={{color:h1Color}}>{nameSplash}</h1>
            <p>{dSplash}</p>
         </div>
        </div>
      )}
     
    </div>
  )
}

export default GymLeaderList