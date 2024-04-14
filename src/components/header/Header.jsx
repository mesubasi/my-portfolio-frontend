//Header.jsx
import React from 'react'

const Header = () => {
  return (
    <div className='ml-[10px] mt-[35px]'>
      <header className='header flex justify-between items-center sm:w-[480px] md:w-[720px] xl:w-[1168px] mx-auto'>
        <div className='width-[131.1px] h-[40.07px]'>
          <a href="/">
            <h2 className='text-2xl text-white'>LOGO</h2>
          </a>
        </div>
        <div className='button flex gap-2'>
          <button to="/about" className='bg-black w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A]'>
            <p className='text-[#E1E1E1] text-[13.19px] poppins-medium'>About me</p>
          </button>
          <button to="/contact" className='bg-white w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A]'>
            <p className='text-black text-[13.19px] poppins-medium '>Contact</p>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header