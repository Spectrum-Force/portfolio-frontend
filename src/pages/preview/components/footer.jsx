import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSkype, FaGoogle, FaDribbble } from 'react-icons/fa'; 
const footer = () => {
  return (
    <div className='pt-8'>


<footer className="bg-[#222222] text-[#FFFFFF] py-4 px-6 flex justify-center items-center h-40">  
      <div className="flex space-x-4">  
        <a href="https://www.facebook.com">  
          <FaFacebook size={20} />  
        </a>  
        <a href="https://www.twitter.com">  
          <FaTwitter size={20} />  
        </a>  
        <a href="https://www.instagram.com">  
          <FaInstagram size={20} />  
        </a>  
        <a href="https://www.linkedIn.com">  
          <FaLinkedin size={20} />  
        </a>  
        <a href="https://www.Skype.com">  
          <FaSkype size={20} />  
        </a>  
        <a href="https://www.Google.com">  
          <FaGoogle size={20} />  
        </a>  
        <a href="https://www.Dribble.com">  
          <FaDribbble size={20} />  
        </a>  
      </div>  
    </footer>  
     


    </div>
  )
}

export default footer