//Section.jsx
import Logo from "../../assets/mes.png"

const Section = () => {


    return (
        <div className='mt-[123px]'>
            <section className='flex flex-col items-center'>
                <div className='image-container'>
                    <img src={Logo} alt='Profile Picture' className='sm:w-[231px] md:w-[231px] xl:w-[231px]' />
                </div>
                <div>
                    <h2 className='text-white poppins-bold text-[63px] mt-5'>M. Emin Subaşı!</h2>
                </div>
                <div className='flex -mt-4'>
                    <p className='text-[#C9C9C9] poppins-semibold text-[26px]'>I do Code & {" "}
                        <span className='bg-gradient-to-r from-[#9C83FF]  to-[#FF9051] text-transparent bg-clip-text text-[26px] mr-1'>Chill</span>
                    </p>
                    <span className='text-[26px] poppins-semibold'>🍿</span>
                </div>
                <div className='w-[587px]'>
                    <p className='text-[#E1E1E1] text-[16px] poppins-medium leading-6 mt-3'>Passionate Computer Programmer with a focus on MERN, PHP and Flutter development,
                        dedicated to crafting elegant and user-friendly web and mobile applications.</p>
                </div>
                <div className="border-[#585858] border rounded-[75px] w-[187px] h-[55px] flex justify-center mt-8">
                    <button to="/contact">
                        <p className="text-white poppins-medium text-base">Contact Me</p>
                    </button>
                </div>
                <div className="mt-24">
                    <h2 className="inter-extrabold text-white text-5xl tracking-tight">ABOUT ME</h2>
                </div>
                <div>
                    <p className="inter-medium bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text text-xs tracking-[.70em]">EXPLORE NOW</p>
                </div>
            </section>
        </div>
    )
}

export default Section