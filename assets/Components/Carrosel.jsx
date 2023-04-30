import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React, { useState, useEffect, useRef } from 'react';
import './carrosel.css';
export function Carrosel(){
    const [countInicial, setCountInicial] = useState(0)
    const [buttonClicked, setbutton] = useState(0);
    const [count, setCount] = useState(0);
    const classeAdicional = 'my-custom-navigation-selected'
    const handleClick = (index, indexButton) => {
        setCount(index);
        setbutton(indexButton);
      };

    function handleTransitionEnd(info) {
        setCountInicial(info.currentIndex)
        setbutton(info.currentIndex);
       
    }
    const handleAnimationEnd = () => {
        setCount((count) => {
        return count < 5 ? count + 1 : 0;
        });
    };
  
  useEffect(() => {
    const growElement = document.querySelector('.navigation-loading');
    if (growElement) {
      growElement.addEventListener('animationend', handleAnimationEnd);
    }
  
    return () => {
      if (growElement) {
        growElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [count, handleAnimationEnd]);
    return(
        <div>
            <AwesomeSlider className="h-[27rem] flex justify-center align-center"
                animation="flipInXAnimation"
                play={true}
                cancelOnInteraction={false}
                interval={500}
                selected={count}
                bullets={false}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className='slide-even h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3310 1902" data-t="hero-carousel-orange-svg" aria-labelledby="hero-carousel-orange-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-orange-svg">Decoração</title><linearGradient id="hero-carousel-orange-left" x1="-4.905599%" x2="3.218293%" y1="57.147482%" y2="47.205789%"><stop offset="0" stop-color="#fab818"></stop><stop offset="1" stop-color="#f47521"></stop></linearGradient><linearGradient id="hero-carousel-orange-right" x1="18.134394%" x2="17.02757%" y1="51.289201%" y2="65.140597%"><stop offset="0" stop-color="#f47521"></stop><stop offset="1" stop-color="#fab818"></stop></linearGradient><g fill="none" fill-rule="evenodd"><path d="m2268.26052 463.970455c491.14993 42.97005 875.54102 389.228143 947.31334 815.626515l-.00832.0154c2.39794-16.4818 4.33733-33.11744 5.80536-49.89719 45.68251-522.153494-382.34892-986.130402-956.03495-1036.321426-573.68604-50.191025-1075.78345 332.410153-1121.46596 854.563646-6.57238 75.12255-3.3423 149.04091 8.72181 220.6961l.00788-.0149c72.2207-496.400539 560.40996-853.246302 1115.66084-804.668145z" fill="url(#hero-carousel-orange-left)" opacity=".8" transform="matrix(.98162718 .190809 -.190809 .98162718 180.210179 -402.972573)"></path><path d="m1194.30704 945.79957c491.14993 42.970052 875.54103 389.22814 947.31335 815.62652l-.00832.01539c2.39794-16.48178 4.33732-33.11743 5.80536-49.89718 45.68251-522.1535-382.34892-986.130407-956.03496-1036.321432-573.686038-50.191025-1075.783454 332.410152-1121.4659656 854.563652-6.5723707 75.12254-3.3422985 149.0409 8.7218102 220.6961l.0078811-.01491c72.2207013-496.40053 560.4099703-853.246297 1115.6608443-804.66814z" fill="url(#hero-carousel-orange-right)" transform="matrix(-.99026807 -.1391731 .1391731 -.99026807 2037.292749 2574.701313)"></path></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/ea22885f-a533-46ef-9602-e3b51506d084.webp"></img>
                    </figure>
                </div>
                <div className='slide-odd h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2440 2102" data-t="hero-carousel-blue-svg" aria-labelledby="hero-carousel-blue-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-blue-svg">Decoração</title><g fill="none" fill-rule="evenodd"><path d="M1034.49 1C1558.882 1 2037.187-24.606 2102 482c-187.609-254.74-535.09-2.856-875.79-2.856-569.125 0-1030.49 461.216-1030.49 1030.154 0 44.719 2.85 88.772 8.378 131.988C78.322 1470.502 4 1259.505 4 1031.155 4 462.216 465.366 1 1034.49 1z" fill="#269495" fill-opacity=".3"></path><g fill="#213944" fill-opacity=".1"><path d="M590 2255C198 2048-6 1328 480 799c-990 823-139.233 1640-139.233 1640S478 2268 590 2255zM1700 1445c-266-174-378-430-378-1163-74.406-107.16-193.739-72.827-358 103 12 514.667 257.333 868 736 1060z"></path></g></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/a81aabd2-f610-4fe8-bfe3-1ee576aab3c8.webp"></img>
                    </figure>
                </div>
                <div className='slide-even h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3310 1902" data-t="hero-carousel-orange-svg" aria-labelledby="hero-carousel-orange-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-orange-svg">Decoração</title><linearGradient id="hero-carousel-orange-left" x1="-4.905599%" x2="3.218293%" y1="57.147482%" y2="47.205789%"><stop offset="0" stop-color="#fab818"></stop><stop offset="1" stop-color="#f47521"></stop></linearGradient><linearGradient id="hero-carousel-orange-right" x1="18.134394%" x2="17.02757%" y1="51.289201%" y2="65.140597%"><stop offset="0" stop-color="#f47521"></stop><stop offset="1" stop-color="#fab818"></stop></linearGradient><g fill="none" fill-rule="evenodd"><path d="m2268.26052 463.970455c491.14993 42.97005 875.54102 389.228143 947.31334 815.626515l-.00832.0154c2.39794-16.4818 4.33733-33.11744 5.80536-49.89719 45.68251-522.153494-382.34892-986.130402-956.03495-1036.321426-573.68604-50.191025-1075.78345 332.410153-1121.46596 854.563646-6.57238 75.12255-3.3423 149.04091 8.72181 220.6961l.00788-.0149c72.2207-496.400539 560.40996-853.246302 1115.66084-804.668145z" fill="url(#hero-carousel-orange-left)" opacity=".8" transform="matrix(.98162718 .190809 -.190809 .98162718 180.210179 -402.972573)"></path><path d="m1194.30704 945.79957c491.14993 42.970052 875.54103 389.22814 947.31335 815.62652l-.00832.01539c2.39794-16.48178 4.33732-33.11743 5.80536-49.89718 45.68251-522.1535-382.34892-986.130407-956.03496-1036.321432-573.686038-50.191025-1075.783454 332.410152-1121.4659656 854.563652-6.5723707 75.12254-3.3422985 149.0409 8.7218102 220.6961l.0078811-.01491c72.2207013-496.40053 560.4099703-853.246297 1115.6608443-804.66814z" fill="url(#hero-carousel-orange-right)" transform="matrix(-.99026807 -.1391731 .1391731 -.99026807 2037.292749 2574.701313)"></path></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/58e607a2-5d05-412a-83b8-13ad9fbe635d.webp"></img>
                    </figure>
                </div>
                <div className='slide-even h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3310 1902" data-t="hero-carousel-orange-svg" aria-labelledby="hero-carousel-orange-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-orange-svg">Decoração</title><linearGradient id="hero-carousel-orange-left" x1="-4.905599%" x2="3.218293%" y1="57.147482%" y2="47.205789%"><stop offset="0" stop-color="#fab818"></stop><stop offset="1" stop-color="#f47521"></stop></linearGradient><linearGradient id="hero-carousel-orange-right" x1="18.134394%" x2="17.02757%" y1="51.289201%" y2="65.140597%"><stop offset="0" stop-color="#f47521"></stop><stop offset="1" stop-color="#fab818"></stop></linearGradient><g fill="none" fill-rule="evenodd"><path d="m2268.26052 463.970455c491.14993 42.97005 875.54102 389.228143 947.31334 815.626515l-.00832.0154c2.39794-16.4818 4.33733-33.11744 5.80536-49.89719 45.68251-522.153494-382.34892-986.130402-956.03495-1036.321426-573.68604-50.191025-1075.78345 332.410153-1121.46596 854.563646-6.57238 75.12255-3.3423 149.04091 8.72181 220.6961l.00788-.0149c72.2207-496.400539 560.40996-853.246302 1115.66084-804.668145z" fill="url(#hero-carousel-orange-left)" opacity=".8" transform="matrix(.98162718 .190809 -.190809 .98162718 180.210179 -402.972573)"></path><path d="m1194.30704 945.79957c491.14993 42.970052 875.54103 389.22814 947.31335 815.62652l-.00832.01539c2.39794-16.48178 4.33732-33.11743 5.80536-49.89718 45.68251-522.1535-382.34892-986.130407-956.03496-1036.321432-573.686038-50.191025-1075.783454 332.410152-1121.4659656 854.563652-6.5723707 75.12254-3.3422985 149.0409 8.7218102 220.6961l.0078811-.01491c72.2207013-496.40053 560.4099703-853.246297 1115.6608443-804.66814z" fill="url(#hero-carousel-orange-right)" transform="matrix(-.99026807 -.1391731 .1391731 -.99026807 2037.292749 2574.701313)"></path></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/1a49589f-9bc2-4d87-8086-98542db2f105.webp"></img>
                    </figure>
                </div>
                <div className='slide-odd h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2440 2102" data-t="hero-carousel-blue-svg" aria-labelledby="hero-carousel-blue-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-blue-svg">Decoração</title><g fill="none" fill-rule="evenodd"><path d="M1034.49 1C1558.882 1 2037.187-24.606 2102 482c-187.609-254.74-535.09-2.856-875.79-2.856-569.125 0-1030.49 461.216-1030.49 1030.154 0 44.719 2.85 88.772 8.378 131.988C78.322 1470.502 4 1259.505 4 1031.155 4 462.216 465.366 1 1034.49 1z" fill="#269495" fill-opacity=".3"></path><g fill="#213944" fill-opacity=".1"><path d="M590 2255C198 2048-6 1328 480 799c-990 823-139.233 1640-139.233 1640S478 2268 590 2255zM1700 1445c-266-174-378-430-378-1163-74.406-107.16-193.739-72.827-358 103 12 514.667 257.333 868 736 1060z"></path></g></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/96ee8c89-b189-46f7-9ea1-e087855d0521.webp"></img>
                    </figure>
                </div>
                <div className='slide-even h-full w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3310 1902" data-t="hero-carousel-orange-svg" aria-labelledby="hero-carousel-orange-svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid slice"><title id="hero-carousel-orange-svg">Decoração</title><linearGradient id="hero-carousel-orange-left" x1="-4.905599%" x2="3.218293%" y1="57.147482%" y2="47.205789%"><stop offset="0" stop-color="#fab818"></stop><stop offset="1" stop-color="#f47521"></stop></linearGradient><linearGradient id="hero-carousel-orange-right" x1="18.134394%" x2="17.02757%" y1="51.289201%" y2="65.140597%"><stop offset="0" stop-color="#f47521"></stop><stop offset="1" stop-color="#fab818"></stop></linearGradient><g fill="none" fill-rule="evenodd"><path d="m2268.26052 463.970455c491.14993 42.97005 875.54102 389.228143 947.31334 815.626515l-.00832.0154c2.39794-16.4818 4.33733-33.11744 5.80536-49.89719 45.68251-522.153494-382.34892-986.130402-956.03495-1036.321426-573.68604-50.191025-1075.78345 332.410153-1121.46596 854.563646-6.57238 75.12255-3.3423 149.04091 8.72181 220.6961l.00788-.0149c72.2207-496.400539 560.40996-853.246302 1115.66084-804.668145z" fill="url(#hero-carousel-orange-left)" opacity=".8" transform="matrix(.98162718 .190809 -.190809 .98162718 180.210179 -402.972573)"></path><path d="m1194.30704 945.79957c491.14993 42.970052 875.54103 389.22814 947.31335 815.62652l-.00832.01539c2.39794-16.48178 4.33732-33.11743 5.80536-49.89718 45.68251-522.1535-382.34892-986.130407-956.03496-1036.321432-573.686038-50.191025-1075.783454 332.410152-1121.4659656 854.563652-6.5723707 75.12254-3.3422985 149.0409 8.7218102 220.6961l.0078811-.01491c72.2207013-496.40053 560.4099703-853.246297 1115.6608443-804.66814z" fill="url(#hero-carousel-orange-right)" transform="matrix(-.99026807 -.1391731 .1391731 -.99026807 2037.292749 2574.701313)"></path></g></svg>
                    <figure className='flex justify-center align-center'>
                        <img className="image-slide" src="https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/7c3a4568-fe5c-4f8d-be93-270cc0424529.webp"></img>
                    </figure>
                </div>
            </AwesomeSlider> 
            <div className='mt-4 justify-center align-center flex flex-row w-100 flex-wrap'>
                <div className={`my-custom-navigation flex flex-col justify-center ${0 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(0, 0)}>  
                {buttonClicked == 0 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>Kamikatsu: Working For God In A Godless World</span>
                </div>
                <div className={`my-custom-navigation flex flex-col justify-center ${1 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(1, 1)} >
                {buttonClicked == 1 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>Tonikawa</span>
                </div>
                <div className={`my-custom-navigation flex flex-col justify-center ${2 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(2, 2)}>
                {buttonClicked == 2 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>Dr. STONE Season 3 Novo Episódio</span>
                </div>
            <div className={`my-custom-navigation flex flex-col justify-center ${3 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(3, 3)}>  
                {buttonClicked == 3 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>Slime Movie: Scarlet Bond</span>
                </div>
            <div className={`my-custom-navigation flex flex-col justify-center ${4 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(4, 4)}>  
                {buttonClicked == 4 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>The Ancient Magus' Bride Season 2</span>
            </div>
            <div className={`my-custom-navigation flex flex-col justify-center ${5 ===  buttonClicked ? classeAdicional : "" } align-center`} onClick={() => handleClick(5, 5)}>  
                {buttonClicked == 5 ? 
                
                <div className='navigation-pre-loading'>
                    <div className='navigation-loading'></div>
                </div>
                :
                <div></div>                
                }
                <span className='textoSlide flex p-2 font-bold'>The Legendary Hero is Dead! Novo Episódio</span>
            </div>
            </div>
        </div>
    )
}