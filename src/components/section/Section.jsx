//Section.jsx
import Logo from "../../assets/mes.png"

const Section = () => {


    return (
        <div className='mt-[123px]'>
            <section className='flex flex-col items-center'>
                <div className='image-container border-b-2 animate-pulse border-b-red-500'>
                    <img src={Logo} alt='Profile Picture' className='animate-bounce border-2  border-red-600 shadow-lg shadow-red-400 rounded-full sm:w-[231px] md:w-[231px] xl:w-[231px]' />
                </div>
                <div>
                    <h2 className=' text-white poppins-bold text-[63px] mt-5 animate-typing overflow-hidden whitespace-nowrap border-r-4'>M. Emin Subaşı!</h2>
                </div>
                <div className='flex'>
                    <p className='text-[#C9C9C9] poppins-semibold text-[26px]'>I do Code & {" "}
                        <span className='bg-gradient-to-r from-[#9C83FF]  to-[#FF9051] text-transparent bg-clip-text text-[26px] mr-1'>Chill</span>
                    </p>
                    <span className='text-[26px] poppins-semibold'>🍿</span>
                </div>
                <div className='w-[587px]'>
                    <p className='animate-slideLeft text-[#E1E1E1] text-[16px] poppins-medium leading-6 mt-3 text-center'>Passionate Computer Programmer with a focus on MERN, PHP and Flutter development,
                        dedicated to crafting elegant and user-friendly web and mobile applications.</p>
                </div>
                <div className="border-[#585858] border rounded-[75px] w-[187px] h-[55px] flex justify-center mt-8 hover:bg-red-400 transition-all hover:cursor-pointer hover:text-black text-white">
                    <button to="/contact">
                        <p className="e poppins-medium text-base">Contact Me</p>
                    </button>
                </div>
                <div className="mt-24">
                    <h2 className="inter-extrabold text-white text-5xl tracking-tight">ABOUT ME</h2>
                </div>
                <div>
                    <p className="inter-medium bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text text-xs tracking-[.70em]">EXPLORE NOW</p>
                </div>
                <div className="animate-slideRight w-[706px] min-h-[147px] max-h-max leading-5 mt-5 px-10">
                    <p className="text-[#E1E1E1] text-center inter-medium text-base">
                        As a passionate computer programmer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of PHP, C++, Python, MERN Stack my expertise centers around Flutter, where I seamlessly blend technology with innovation.
                        <br /><br />
                        With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible.
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Section