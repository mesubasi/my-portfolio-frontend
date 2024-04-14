import React from 'react'
import Logo from "../../assets/mes.png"

const Section = () => {


    return (
        <div className='mt-[123px]'>
            <section className='flex flex-col items-center'>
                <div className='image-container'>
                    <img src={Logo} alt='Profil Fotoğrafı' className='sm:w-[231px] md:w-[231px] xl:w-[231px]' />
                </div>
                <div>
                    <h2 className='text-white poppins-bold text-[63px] mt-9'>Emin Subaşı!</h2>
                </div>
                <div className='flex'>
                    <p className='text-[#C9C9C9] poppins-semibold text-[26px]'>I do Code & {" "}
                        <span className='bg-gradient-to-r from-[#9C83FF]  to-[#FF9051] text-transparent bg-clip-text text-[26px] mr-1'>Chill</span>
                    </p>
                    <span className='text-[26px] poppins-semibold'>🍿</span>
                </div>
                <div className='flex w-[587px]'>
                    <p className='text-[#E1E1E1] text-[16px] poppins-medium'>Passionate Software Engineer with a focus on React Native development,
                        dedicated to crafting elegant and user-friendly mobile applications.</p>
                </div>
            </section>
        </div>
    )
}

export default Section