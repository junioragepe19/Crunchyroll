import { AnimesList } from './AnimesList';
export function Amostra(){
    const slides = '[{ "titulo": "Hell\'s Paradise",\
        "tipo": "Série",\
        "imagem": "https://img1.ak.crunchyroll.com/i/spire1/1565c7c52650cb50c6fb50deaac6cca61680095420_main.jpg",\
        "tipoDublagem": "Leg | Dub"},\
        { "titulo": "MASHLE: MAGIA E MÚSCULOS",\
        "tipo": "Série",\
        "imagem": "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2023/03/Mashle-Magic-and-Muscles-anime-visual-2-1-scaled.jpg",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "The Legendary Hero is Dead!",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMBickKu_WnMNl6U21ibhAZZ8iwbizW1lkh0aBk11oFTdBHuT",\
        "tipoDublagem": "Leg | Dub"},\
        { "titulo": "KamiKatsu: Atividades Divinas em um Mundo sem Deuses",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSocucQABY_tv86eBEPoNU570apRbs0cgdEixgTw8uzLFrjWlLL",\
        "tipoDublagem": "Leg | Dub"},\
        { "titulo": "Uma vizinha de Outro Mundo",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3QML4w9jbuomg0NwIFiRtkc2dZroejClq-9WvOULZT1IcN5c8",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Dead Mount Death Play",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsn2_YSmUdwCa5Q-3F6K4tGD6-AUbuPZAsdvIVwMWbaLMXk6wF",\
        "tipoDublagem": "Legendado"},\
         { "titulo": "Minha Mana Apelona",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4B5rdRQyN8XqMqbCbIIZ7P148F5dSznWZSDjtKbucxC_jEcN",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Crônicas de um Aristocrata em Outro Mundo",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvBnoShZdH_OHKKoYijDgJrKZHVewA4saMZyqPIIJ7DGjbQbZb",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Como Raeliana Foi Parar na Mansão do Duque",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPqVHdB2pgedatkVNmmUgHGkAOVR3Krqn6pl_IHogDzaBGyZD6",\
        "tipoDublagem": "Leg | Dub"}\
]';
    const slidestoRead = JSON.parse(slides);
    return(
        <AnimesList textoPrincipal='Uma amostra da temporada de primavera 2023'
        legenda='Assista os três primeiros episódios desses simulcasts da primavera 2023 de graça!'
        slides={slidestoRead}
        colorBorder='#2AB7B5' />
    )
}