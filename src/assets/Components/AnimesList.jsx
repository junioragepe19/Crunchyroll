import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './general.css';
export function AnimesList({textoPrincipal, legenda, slides, colorBorder}){
    return(
        <div className="w-full h-[28rem] mt-12 ml-32 text-start text-white">
            <h1 className="text-[2.1rem] font-Crunchy select">
            {textoPrincipal}
            </h1>
            <h2 className='select'>
            {legenda}
            </h2>
            <div className={`mt-4 border-t-[0.3rem] h-28 w-[81%]`} style={{ borderTopColor: colorBorder }}>
                <Swiper className='mt-4'
                spaceBetween={1}
                 slidesPerView={6}
                 >
                    {slides.map((item, index) => (
                        <SwiperSlide className='flex flex-row gap-6'>
                            <div className='hover:bg-white/5 p-2'>
                            <figure className="w-[10rem] h-auto font-lato">
                                <img className='w-[10rem] h-[15rem]' src={item.imagem}></img>
                                <figcaption>{item.titulo}</figcaption>
                                <figcaption className="text-[#A0A0A0] flex gap-1"><span className='text-[#2ABDBB]'>{item.tipo} </span>
                                <div className='w-[0.25rem] h-[0.25rem] mt-[0.7rem] bg-[#A0A0A0] rotate-45'>
                                </div>
                                    {item.tipoDublagem}</figcaption>
                            </figure>
                            </div>
                        </SwiperSlide>
                    ))}      
                </Swiper>
            </div>
        </div>
    )
}