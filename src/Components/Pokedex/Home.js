import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
function Home({url}) {
    const videoSource = {
        type: 'video',
        sources: [
            {
                src: url, // Remplaza esto con la URL de tu video de YouTube
                provider: 'youtube',
            },
        ],
    };
    return (
        <div>
            <p>Anime</p>
            <div class="container">
            <Plyr  source={videoSource}  />

</div>


        </div>
    )
}

export default Home