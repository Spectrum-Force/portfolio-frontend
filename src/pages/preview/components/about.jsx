import React from 'react'

const About = ({content}) => {
  return (
    <div className='bg-[#555555] justify-center items-center pt-10 px-10 space-y-10  md:px-16' id='about'>

      <div className='flex flex-col items-center space-y-10'>
        <h3 className='text-[#337eff] text-[14px] items-center'>About Me</h3>
        <h1 className='text-[40px] text-[#FFFFFF]'>Welcome To My Site</h1>
        <p className='text-[#FFFFFF] md:text-4xl'>{content}</p>
      </div>

      






    </div>
  )
}

export default About