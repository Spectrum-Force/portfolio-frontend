import React from 'react'

const About = () => {
  return (
    <div className='bg-[#555555] justify-center items-center pt-10 px-10 space-y-10  md:px-16' id='about'>

      <div className='flex flex-col items-center space-y-10'>
        <h3 className='text-[#337eff] text-[14px] items-center'>About Me</h3>
        <h1 className='text-[40px] text-[#FFFFFF]'>Welcome To My Site</h1>
        <p className='text-[#FFFFFF] md:text-4xl'>I am a website designer from London, with a strong
          focus in UI/UX design. I love to get new experiences
          and <br /> always learn from my surroundings. I've done more
          than 285 projects. You can check it through portfolio
          section <br /> on this website.
          I looking forward to any opportunities and challenges.</p>
      </div>

      <div className='flex justify-between items-center space-x-6 '>
        <div className='w-[33%]'>
          <h2 className="text-[18px] text-[#FFFFFF]">Design</h2>
          <div className="flex items-center mt-2 relative w-full">
            <div className="h-1 bg-[#0101011A] w-full rounded-md "></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className='w-[33%]'>
          <h2 className="text-[18px] text-[#FFFFFF]">Marketing</h2>
          <div className="flex items-center mt-2 relative w-full">
            <div className="h-1 bg-[#0101011A] w-full rounded-md"></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '70%' }}></div>
          </div>

        </div>
        <div className='w-[33%]'>
          <h2 className="text-[18px] text-[#FFFFFF]">Photography</h2>
          <div className="flex items-center mt-2 relative w-full">
            <div className="h-1 bg-[#0101011A] w-full rounded-md"></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '90%' }}></div>
          </div>

        </div>






      </div>

    <div className='flex justify-between items-center space-x-6'>
      <div className='w-[33%] '>
          <h2 className="text-[18px] text-[#FFFFFF]">Branding</h2>
          <div className="flex items-center mt-2 relative">
            <div className="h-1 bg-[#0101011A] w-full rounded-md"></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '70%' }}></div>
          </div>
      </div>
      <div className='w-[33%]'>
          <h2 className="text-[18px] text-[#FFFFFF]">Branding</h2>
          <div className="flex items-center mt-2 relative">
            <div className="h-1 bg-[#0101011A] w-full rounded-md"></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '90%' }}></div>
          </div>
      </div>
     <div className='w-[33%]'>
          <h2 className="text-[18px] text-[#FFFFFF]">SEO</h2>
          <div className="flex items-center mt-2 relative">
            <div className="h-1 bg-[#0101011A] w-full rounded-md"></div>
            <div className="h-1 bg-[#337eff] absolute" style={{ width: '75%' }}></div>
          </div>

        </div>

     </div>






    </div>
  )
}

export default About