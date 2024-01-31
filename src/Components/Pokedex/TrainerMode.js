import React, { useState, useEffect } from 'react'
import '../../Css/gymleader.css'
import '../../Css/pokedex.css'

import Alola from '../../Assets/regions/alola.jpg'
import Kanto from '../../Assets/regions/kanto.jpg'
import Hoenn from '../../Assets/regions/hoenn.jpg'
import Paldea from '../../Assets/regions/paldea.jpg'
import Galar from '../../Assets/regions/galar.jpg'
import Sinnoh from '../../Assets/regions/sinnoh.jpg'
import Kalos from '../../Assets/regions/kalos.jpg'
import Johto from '../../Assets/regions/johto.jpg'
import Unova from '../../Assets/regions/unova.jpg'
import Ocho from '../../Assets/regions/ocho.jpg'
import GymLeaderList from './GymLeaderList'
function TrainerMode({stateTrainer, setGymState}) {
    const [trainer, setTrainer] = useState(stateTrainer);
    const [trainerRegion, setTrainerRegion] = useState("");


    

    function selectGymLeaderRegion(e, nameRegion) {
        e.preventDefault();
        setTrainerRegion(nameRegion)
        setGymState(false)
  
    }

    useEffect(() => {

        console.log(stateTrainer + "Al Comenzar")

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
    return (
        <div>
            <>
            {stateTrainer == true ? (
            <div className='poke_regions'>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Kanto")}>
                    <img src={Kanto} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Johto")}>
                    <img src={Johto} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Hoenn")}>
                    <img src={Hoenn} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Sinnoh")}>
                    <img src={Sinnoh} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Unova")}>
                    <img src={Unova} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Kalos")}>
                    <img src={Kalos} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Alola")}>
                    <img src={Alola} />
                </div>

                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "galar")}>
                    <img src={Galar} />
                </div>
                <div className='regionCard' onClick={(e) => selectGymLeaderRegion(e, "Ocho")}>
                    <img src={Ocho} />
                </div>
            </div>) : (<div>
                <GymLeaderList
                    region={trainerRegion}
                    trainer ={stateTrainer}
                />

            </div>)}

            </>
        </div>

    )
}



export default TrainerMode