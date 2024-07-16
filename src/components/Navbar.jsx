import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#555555] text-white p-4 flex items-center justify-between">
      <div className="flex items-center ml-10">
        <img src="src/assets/images/logo-light (1).png" alt="Logo" className="" />
        <span className="font-bold"></span>
      </div>
      <ul className=" flex space-x-4  gap-8 md:px-6 md:py-4 ">
        <li>  
          <a href="#home" className='hover:text-[#1E88E9] hover:underline'>
            Home
          </a>
        </li>  
        <li >  
          <a href="#about" className='hover:text-[#1E88E9] hover:underline'>
            About
          </a>
        </li>    
        <li >  
          <a href="#services" className='hover:text-[#1E88E9] hover:underline'>
            Services
          </a>
        </li>    
        <li >  
          <a href="#portfolio" className='hover:text-[#1E88E9] hover:underline'>
            Portfolio
          </a>
        </li>    
        <li >  
          <a href="#experiences" className='hover:text-[#1E88E9] hover:underline'>
            Experiences
          </a>
        </li>    
        <li >  
          <a href="#contact" className='hover:text-[#1E88E9] hover:underline'>
            Contact
          </a>
        </li>    
        
     
         
         
     
         
        
        
      </ul>
    </nav>
  );
};

export default Navbar;