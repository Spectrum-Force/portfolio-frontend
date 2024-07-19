import React from 'react'
import { MdHome, MdEmail, MdPhone } from 'react-icons/md';

const reference = () => {
  return (
    <section className='pt-20'>

<div className="flex justify-center items-center space-x-6">  
    <div className="flex flex-col items-center">  
        <MdHome size={24} color="#4285F4" />  
        <p className="text-sm text-[#FFFFFF] md:text-left">Address</p> 
        <h6 className='text-[#FFFFFF] md:text-left'>Collins Street West, London, UK</h6> 
    </div>  

    <div className="flex flex-col items-center">  
        <MdEmail size={24} color="#4285F4" />  
        <p className="text-sm text-[#FFFFFF] md:text-left">Email Us</p> 
        <h6 className='text-[#FFFFFF] md:text-left'> contact@profession.com</h6> 
    </div>  

    <div className="flex flex-col items-center md:text-left">  
        <MdPhone size={24} color="#4285F4"/>  
        <p className="text-sm text-[#FFFFFF] md:text-left">Call Us</p>  
        <h6 className='text-[#FFFFFF] md:text-left'>    (208) 333 9296     </h6>
    </div>  
</div>  




    </section>
  )
}

export default reference