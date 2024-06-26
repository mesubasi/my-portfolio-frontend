//Mainpage.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className='bg-amber-700 min-h-screen flex justify-center items-center'>
            <div className='flex flex-col space-y-4'>
                <Link to="/portfolio" className='bg-cyan-800 text-white border px-20 border-solid py-10 text-center rounded-2xl hover:cursor-pointer hover:bg-cyan-950  transition-all'>Portfolio</Link>
                <Link to="/about" className='bg-cyan-800 text-white px-20 border py-10 text-center rounded-2xl hover:cursor-pointer hover:bg-cyan-950 transition-all'>About</Link>
                <Link to="/contact" className='bg-cyan-800 text-white px-20 border py-10 text-center rounded-2xl hover:cursor-pointer hover:bg-cyan-950  transition-all'>Contact</Link>
            </div>
        </div>
    )
}

export default MainPage
