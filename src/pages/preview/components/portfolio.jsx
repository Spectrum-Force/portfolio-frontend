

const portfolio = () => {
  return (
    <div className="bg-[#555555]" id="portfolio">


      <div className='p-20 grid gap-5 justify-center items-center '>
        <h1 className='flex justify-center items-center text-[40px] text-[#FFFFFF] '>My Portfolio</h1>
        <div className='flex justify-start items-center space-x-20 pt-5 '>
          <a href="#" className='hover:text-[#FFFFFF]'>All</a>
          <a href="#" className='hover:text-[#FFFFFF]'>Types</a>
          <a href="#" className='hover:text-[#FFFFFF]' >Mock up</a>
          <a href="#" className='hover:text-[#FFFFFF]'>Typography</a>
          <a href="#" className='hover:text-[#FFFFFF]'> Photography</a>

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
            <p className="text-white text-center pt-2">Project name</p>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (2).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-center pt-2">Project name</p>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (3).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-center pt-2 ">Project name</p>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (4).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-center pt-2">Project name</p>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (5).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-center pt-2">Project name</p>
          </div>
        </div>
        <div className="group relative">
          <img
            src="src/assets/images/pf (6).jpg"
            alt="Project name"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-center pt-2">Project name</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default portfolio