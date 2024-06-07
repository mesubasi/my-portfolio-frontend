//Header.jsx

import { Link } from "react-router-dom"

const Header = ({ firstLink, secondLink, pageName, pageNameSecond }) => {
  return (
    <div className='ml-[10px] pt-8'>
      <header className='header flex justify-between items-center sm:w-[480px] md:w-[720px] xl:w-[1168px] mx-auto'>
        <div className='width-[131.1px] h-[40.07px]'>
          <Link to="/">
            <img className="w-20" src="" alt="Logo" />
          </Link>
        </div>
        <div className='button flex gap-2'>
          <Link to={firstLink}>
            <button className='bg-black w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A] text-[#E1E1E1] hover:cursor-pointer hover:bg-red-400 hover:shadow-sm hover:shadow-red-400 hover:text-black transition-all hover:border-red-400'>
              <p className='text-[13.19px] poppins-medium'>{pageName}</p>
            </button>
          </Link>
          <Link to={secondLink}>
            <button className='bg-white w-[96px] h-[35px] rounded-[8.8px] border-[0.88px] border-[#9A9A9A] hover:bg-red-400 hover:cursor-pointer hover:shadow-sm hover:shadow-red-400 transition-all hover:text-white text-black hover:border-red-400'>
              <p className='text-[13.19px] poppins-medium '>{pageNameSecond}</p>
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header