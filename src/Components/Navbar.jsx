import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
      <nav aria-label="Breadcrumb" className="flex items-center justify-center fixed top-0 left-0 w-full z-50">
  <ol className="flex items-center  justify-center text-sm text-gray-700 gap-1 sm:gap-2 md:gap-3 p-2 bg-red-800 w-full flex-wrap">
    <li>
      <Link to="/" className="block justify-center text-white transition-colors hover:text-gray-900 text-sm sm:text-base md:text-xl "><i class="fa-solid fa-house-chimney"></i>  Home </Link>
    </li>

    <li className="rtl:rotate-180">
     
    </li>

    <li>
      <Link to="/About" className="block transition-colors text-white hover:text-gray-900 text-sm sm:text-base md:text-xl "><i class="fa-regular fa-circle-question"></i>  About </Link>
    </li>

    <li className="rtl:rotate-180">
     
    </li>

    <li>
      <Link to="/Skills" className="block transition-colors text-white hover:text-gray-900 text-sm sm:text-base md:text-xl"><i class="fa-solid fa-bolt"></i> Skills </Link>
        </li>
        

   
    <li className="rtl:rotate-180">
      
    </li>

    
        <li>
  <Link to="/Projects" className="block transition-colors text-white hover:text-gray-900 text-sm sm:text-base md:text-xl ">
    <i className="fa-solid fa-code"></i> Project 
  </Link>
</li>
    <li className="rtl:rotate-180">
     
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
      
    </li>

           
    <li className="rtl:rotate-180">
      
    </li>

    <li>
      <Link to="/Cv" className="block transition- text-white hover:text-gray-900 text-sm sm:text-base md:text-xl "><i class="fa-solid fa-briefcase"></i> Cv </Link>
    </li>
    
        

        
    <li className="rtl:rotate-180">
      
    </li>

    <li>
      <Link to="/Contact" className="block transition- text-white hover:text-gray-900 text-sm sm:text-base md:text-xl "><i class="fa-regular fa-address-book"></i> Contact </Link>
    </li>
    


      </ol>
</nav>

  )
}

export default Navbar
