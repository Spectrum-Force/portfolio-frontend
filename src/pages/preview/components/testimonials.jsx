import React from 'react'

const testimonials = () => {
  return (
    <div className=' bg-[#555555] pt-40'>
      <div className='flex  flex-col justify-center items-center'>
        <div className=' text-[#1E88E9]'>
          <h4>Testimonials</h4>
        </div>

        <div className='text-[#FFFFFF] pt-2 text-[40px]'>
          <h1>What They Say</h1>
        </div>

      </div>


      <div className="flex flex-row  gap-8 justify-center items-center pt-8 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div className="flex flex-col items-center h-80 w-72 bg-[#555555]
        border border-[#999999]
         rounded-lg transition duration-300 ease-in-out transform
         space-y-2 pt-5">
          <div className="p-4">
            <img
              className="w-10 "
              src="src/assets/images/1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 px-6">
            <h3 className="text-lg font-bold  text-[#1E88E9]">Thomas, Samsung</h3>
            <p className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut pariatur aperiam suscipit possimus.</p>
          </div>
        </div>
        <div className="flex flex-col items-center h-80 w-72 bg-[#555555] 
             rounded-lg transition duration-300 ease-in-out transform
             space-y-2 pt-5  border border-[#999999]">
          <div className="p-4">
            <img
              className="w-10"
              src="src/assets/images/2.jpg"
              alt="" />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 px-6">
            <h3 className="text-lg font-bold text-[#1E88E9]">Sarah, Microsoft</h3>
            <p className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut pariatur aperiam suscipit possimus.</p>
          </div>
        </div>
        <div className="flex flex-col items-center h-80 w-72 bg-[#555555]
           rounded-lg transition duration-300 ease-in-out transform
            space-y-2 pt-5 border border-[#999999] ">
          <div className="p-4">
            <img
              className="w-10"
              src="src/assets/images/3.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 px-6">
            <h3 className="text-lg font-bold text-[#1E88E9]">Micheal, Apple</h3>
            <p className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut pariatur aperiam suscipit possimus.</p>
          </div>
        </div>



        


        </div>   



    </div>
  )
}

export default testimonials