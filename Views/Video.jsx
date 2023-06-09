import React, { useEffect } from 'react';
import './video.css'


export function Video(){
    useEffect(() => {
        const paginaAtual = document.getElementsByClassName('ytp-chrome-top ytp-show-cards-title')
        console.log(paginaAtual)
      }, []);

    return( 
        <div className="h-[10rem] w-full absolute text-white mt-14 justify-center flex m-auto">
          <div class="sketchfab-embed-wrapper"> <iframe title="Kazuma Satou (Konosuba)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9965ccb043034beeb45a00c7e222e290/embed"> </iframe> <p> <a href="https://sketchfab.com/3d-models/kazuma-satou-konosuba-9965ccb043034beeb45a00c7e222e290?utm_medium=embed&utm_campaign=share-popup&utm_content=9965ccb043034beeb45a00c7e222e290" target="_blank" rel="nofollow"> Kazuma Satou (Konosuba) </a> by <a href="https://sketchfab.com/luukjah?utm_medium=embed&utm_campaign=share-popup&utm_content=9965ccb043034beeb45a00c7e222e290" target="_blank" rel="nofollow"> Luukjah </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9965ccb043034beeb45a00c7e222e290" target="_blank" rel="nofollow">Sketchfab</a></p></div>
        </div>
    )
}