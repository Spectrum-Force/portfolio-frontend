
import { Link } from 'react-router-dom';
import React, {useState} from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false);
  const toggleMenu =() => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#555555] text-white p-4 flex items-center justify-between">
      <div className="flex items-center ml-10">
        <img src="src/assets/images/logo-light (1).png" alt="Logo" className="" />
        <span className="font-bold"></span>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
         

        <div className="md:hidden">  
          <button onClick={toggleMenu}>  
            <svg  
              className="h-6 w-6 text-white"  
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 20 20"  
              fill="currentColor"  
            >  
              <path  
                fillRule="evenodd"  
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm4 6h10a1 1 0 110 2H7a1 1 0 110-2zm-4 5h14a1 1 0 010 2H3a1 1 0 010-2z"  
                clipRule="evenodd"  
              />  
            </svg>  
          </button>  
        </div>  
        </button>

      </div>
      <ul className=" flex space-x-4  gap-8 md:px-6 md:py-4 ">
        <li>  
          <a href="#home" className='hover:text-[#337eff] hover:underline'>
            Home
          </a>
        </li>  
        <li >  
          <a href="#about" className='hover:text-[#337eff] hover:underline'>
            About
          </a>
        </li>    
        <li >  
          <a href="#services" className='hover:text-[#337eff] hover:underline'>
            Services
          </a>
        </li>    
        <li >  
          <a href="#portfolio" className='hover:text-[#337eff]hover:underline'>
            Portfolio
          </a>
        </li>    
        <li >  
          <a href="#experiences" className='hover:text-[#337eff] hover:underline'>
            Experiences
          </a>
        </li>    
        <li >  
          <a href="#contact" className='hover:text-[#337eff] hover:underline'>
            Contact
          </a>
        </li>    
        
     
         
         
     
         
        
        
      </ul>
    </nav>
  );
};

export default Navbar;