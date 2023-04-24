import background from '../Images/Fundo.png'

export function Premium({Visibility}){
    return(
        <div>
            {Visibility ?
            <div style={{ backgroundImage: `url(${background})`}} className="absolute top-[4rem] right-[2rem] w-[396px] z-[900] h-[230px] flex justify-items-center ">
                <svg className="h-[2.25rem] left-[0rem] absolute top-5 w-[3.125rem]" viewBox="0 0 50 36" xmlns="http://www.w3.org/2000/svg"><g transform="translate(2 -7)" fill="none" fill-rule="evenodd"><path stroke="#FAB818" stroke-width="2" d="m15.225 33.094.214 1.078-.744.833 1.083-.215.853.733-.237-1.068.73-.855-1.068.24z"></path><path stroke="#FFF" stroke-width="2" d="m6.602 16.97.24 1.124-.837.868 1.218-.224.96.764-.267-1.113.822-.891-1.202.25z"></path><path stroke="#FAB818" stroke-width="2.4" d="m36.534 15.907.088 1.565-1.215 1.028 1.57-.09 1.059 1.205-.123-1.554 1.201-1.063-1.555.127z"></path></g></svg>
                <svg className="h-[1rem] absolute right-[4.1875rem] top-[1.5rem] w-[1.0625rem]" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-276 -10)" stroke="#FAB818" stroke-width="2" fill="none" fill-rule="evenodd"><path d="m284.748 17.598.078.375-.273.28.396-.062.313.265-.087-.373.268-.287-.391.07z"></path></g></svg>
                <svg class="bottom-[0rem] absolute h-[4.9375rem] right-[0rem] w-[4.6875rem]" viewBox="0 0 75 79" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-290 -89)" fill="none" fill-rule="evenodd"><path stroke="#FFC94D" stroke-width="1.68" opacity=".688" d="m343.9 145.118.037.41-.31.28.412-.038.289.306-.047-.406.305-.29-.406.048z"></path><path stroke="#FAB818" opacity=".4" d="m365.957 85.043-52.5 82.059M361.457 173.102l-66-41.03"></path></g></svg>
                <svg class="bottom-[0rem] h-[3.9375rem] left-[0rem] absolute w-[4.375rem]" viewBox="0 0 70 63" xmlns="http://www.w3.org/2000/svg"><g transform="translate(5 -105)" stroke="#FAB818" fill="none" fill-rule="evenodd" opacity=".4"><path d="M-43 73 93.876 192.954M-35.5 158.5l93.301-21.628"></path></g></svg>
                <div className='relative m-auto text-white pl-[3rem] pr-[3rem]'>
                <h1 className='text-[20px] pl-2 text-center flex'>
                <svg className="fill-[#fff] w-[7%] pt-[0.2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img"><title>Premium</title><path d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"></path></svg>
                    <span className='pl-[0.6rem]'>Teste Gratuito de 14 Dias</span>
                    </h1>
                    <h2 className='text-[14px] pt-[0.5rem] text-center'>
                        O acesso Premium lhe confere anime sem propagandas para assistir à vontade, e novos episódios uma hora após a exibição no Japão.
                        <br/>
                        Experimente agora!
                    </h2>
                </div>
            </div>
            : 
            <div>
            </div>
            }
        </div>
    )
}