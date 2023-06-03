import { AnimesList } from './AnimesList';
export function WatchFree(){
    const slides = '[{ "titulo": "JUJUTSU KAISEN",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHHHgwcaTKIrg1_fFD8fMAKoQOVRVFnhmjKOtdheAF0sVTmPTk",\
        "tipoDublagem": "Leg | Dub"},\
        { "titulo": "One Piece",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlWz2ZE6f3ZEEb3j08s1pNHdFeXB4shk4ILqca-cwAfz4g_IgD",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Hunter x Hunter",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQG3IEk7el0Cc3zD_K6zOgFqC9xSWyE_N-uEdp-YvKwnyxreLNp",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "My Hero Academia",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_mqgVB1M1cmisibjBDIIRomvTobcnAcLYwCOijib-qlmBSrG",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "SPY x FAMILY",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKetfgpBdatNPazP0tYunH38xU4_Efkt7QNgInZayEkQBOA__u",\
        "tipoDublagem": "Leg | Dub"},\
        { "titulo": "The Quintessential Quintuplets",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwTo41_XapHAPCKsqFXHRb5cDmnJiI6WQcD8xzK-atwTPLRsqv",\
        "tipoDublagem": "Leg | Dub"},\
         { "titulo": "BORUTO: NARUTO NEXT GENERATIONS",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvN1ICfHiYrfPsvWHh0fSZElchwN4w5onr7g_pW_jSICYPaXk",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Attack on Titan",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwhIJ6nMiVczAaf8GHON_COhpfggq-6qxiJqkzDUWixTDeFrkA",\
        "tipoDublagem": "Legendado"},\
        { "titulo": "Black Clover",\
        "tipo": "Série",\
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdknPBUMBl-8b6UHqP0JmlcLwVKh9X5dbENIHKHiIS6QRcRTdo",\
        "tipoDublagem": "Legendado"}\
]';
    const slidestoRead = JSON.parse(slides);
    return(
        <AnimesList textoPrincipal='Assista de graça!'
        legenda='Assista alguns dos nossos títulos mais populares'
        slides={slidestoRead}
        distance='mt-[70rem]'
        colorBorder='#EF4723' />
    )
}