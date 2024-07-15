import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#555555] text-white p-4 flex items-center justify-between">
      <div className="flex items-center ml-10">
        <img src="src/assets/images/logo-light (1).png" alt="Logo" className="" />
        <span className="font-bold"></span>
      </div>
      <ul className="flex space-x-4  gap-8">
      <li>  
          <Link to="/" className='hover:text-[#1E88E9] hover:underline'>Home</Link>  
        </li>  
        <li>  
          <Link to="/about" className='hover:text-[#1E88E9] hover:underline'>About</Link>  
        </li>    
        <li>  
          <Link to="/services" className='hover:text-[#1E88E9] hover:underline'>Services</Link>  
        </li>    
        <li>  
          <Link to="/portfolio" className='hover:text-[#1E88E9] hover:underline'>Porfolio</Link>  
        </li>    
        <li>  
          <Link to="/experiences" className='hover:text-[#1E88E9] hover:underline'>Experiences</Link>  
        </li>    
        <li>  
          <Link to="/contact" className='hover:text-[#1E88E9] hover:underline'>Contact</Link>  
        </li>    
     
         
         
     
         
        
        
      </ul>
    </nav>
  );
};

export default Navbar;