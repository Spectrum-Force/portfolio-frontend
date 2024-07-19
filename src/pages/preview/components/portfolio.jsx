import React, { useState } from 'react';

const portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#555555] pt-36" id="portfolio">


      <div className='p-20 grid gap-5 justify-center items-center '>
        <h1 className='flex justify-center items-center text-[40px] text-[#FFFFFF] '>My Portfolio</h1>
        <button className="block lg:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div >

          <div className='flex justify-start items-center space-x-20 pt-5  lg:ml-auto '>

            <a href="#" className='hover:text-[#FFFFFF]'>All</a>
            <a href="#" className='hover:text-[#FFFFFF]'>Types</a>
            <a href="#" className='hover:text-[#FFFFFF]' >Mock up</a>
            <a href="#" className='hover:text-[#FFFFFF]'>Typography</a>
            <a href="#" className='hover:text-[#FFFFFF]'> Photography</a>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-[100px]">
        <div className="group relative">
          <img
            src="src/assets/images/pf (1).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center justify-center items-center'>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (2).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center justify-center items-center'>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (3).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center justify-center items-center'>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (4).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center justify-center items-center'>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (5).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center justify-center items-center'>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (6).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <div className='text-white text-center flex place-items-center '>
              <p className="">Project name</p>
              <a href="" className=''>
                link
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default portfolio