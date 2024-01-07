import './App.css'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <div className='bg-black w-screen'>
     <header className='flex mt-4 w-[95%] m-auto  '>
     <a href="/" className='uppercase  w-[112px] h-[43px] md:w-[186px] md:h-[71px] flex-shrink-0'>
        <img src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg" alt="logo" className='w-full h-full object-contain ' />
     </a>
     <div className='hidden md:flex justify-center  w-full items-center text-white text-xs  lg:text-base mx-10 lg:mx-12 '>
      <ul className='text-white max-w-[407px] w-full flex justify-between'>
        <p className='mr-1 text-md uppercase hover:border-b cursor-pointer'>COURSE</p>
        <p className='mr-1 text-md uppercase hover:border-b cursor-pointer'>ABOUT US</p>
        <p className='mr-1 text-md uppercase hover:border-b cursor-pointer'>CONTACT</p>
      </ul>     
     </div>
     <div className='flex justify-center  w-full items-center '>
      <NavLink to='signup'>
        <button type="button" className="bg-pink-500 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-white font-Inter uppercase font-semibold rounded-md border-2 border-white  text-xs w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14  ">Sign up</button>
      </NavLink>
        <button type="button" className="bg-transparent transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-white font-Inter uppercase font-semibold   rounded-md border-2 border-white  text-xs w-[77px] h-7 ml-10 md:text-sm md:w-24 md:h-11 md:ml-6 lg:text-xl lg:w-32 lg:h-14 lg:ml-[52px] ">LOGIN</button>
      
     </div>
     </header>
    </div>
  )
}

export default App
