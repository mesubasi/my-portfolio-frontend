// Contact.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='fixed inset-0 bg-background bg-black bg-no-repeat bg-right-top bg-local bg-auto pt-8'>
      <header className='header flex justify-between items-center sm:w-[480px] md:w-[720px] xl:w-[1168px] mx-auto'>
        <div className='width-[131.1px] h-[40.07px]'>
          <Link to="/">
            <h2 className='text-2xl text-white'>LOGO</h2>
          </Link>
        </div>
        <div className='button flex gap-2'>
          <Link to="/portfolio">
            <button className='bg-black w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A] text-[#E1E1E1] hover:cursor-pointer hover:bg-red-400 hover:shadow-sm hover:shadow-red-400 hover:text-black transition-all hover:border-red-400'>
              <p className='text-[13.19px] poppins-medium'>Home</p>
            </button>
          </Link>
          <Link to="/about">
            <button className='bg-white w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A] hover:bg-red-400 hover:cursor-pointer hover:shadow-sm hover:shadow-red-400 transition-all hover:text-white text-black hover:border-red-400'>
              <p className='text-[13.19px] poppins-medium '>About me</p>
            </button>
          </Link>
        </div>
      </header>
      <section className='flex justify-center max-w max-h-max mt-20'>
        <div className='contact-form items-center inline-block border-2 rounded-lg py-10 px-20'>
          <form action="" method="post" className=''>
            <input type="text" placeholder='Name Surname' required className='w-56 rounded-sm  border-2 hover:border-blue-500' />
            <br /><br />
            <input type="text" placeholder='Mail Address' required className='w-56  rounded-sm' />
            <br /><br />
            <textarea name="" id="" cols="30" rows="10" required placeholder='Write Message' className='w-56  rounded-sm'></textarea>
            <br />
            <br />
            <button type="submit" className='w-20 h-10 bg-red-500 rounded-lg text-white'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default About
