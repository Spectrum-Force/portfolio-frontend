import React from 'react'

const education = ({edu}) => {
  return (
    <section className='pt-10 flex flex-col  items-center'>
 <div className='flex justify-center text-[50px] text-[#FFFFFF]'>
        <h1>Education</h1>
      </div>
    {edu.map((edu) => (
      <div className=''>

     
      <div className=" h-16 w-64  flex justify-center items-center border border-[#337eff] p-4 m-4 
       bg-[#555555]">

        <h5 className="text-[#FFFFFF]">{edu.startDate}   -   {edu.endDate}</h5>
      </div>
      <div>
        <h4 className='text-[#FFFFFF]'>
        {edu.institutionName}</h4>
      </div>
      <div className='pt-4'>
        <p>{edu.program}
        </p>
      </div>
      <div className='pt-4'>
        <p>{edu.qualification}
        </p>
      </div>
      <div className='pt-4'>
        <p>{edu.location}
        </p>
      </div>

      <div className="pt-10">
        <hr className='w-full  h-[4px]' />
      </div>
    </div>
    )

    )}


    {/* <div className=''>

      <div className=" h-10 w-10  border border-[#337eff] p-4 m-4 
       bg-[#555555] flex justify-center items-center">

        <h5 className="text-[#FFFFFF]">2010</h5>
      </div>
      <div>
        <h4 className='text-[#FFFFFF]'>
          
        Master of Design, University of California</h4>
      </div>
      <div className='pt-4'>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        </p>
      </div>

      <div className="pt-10">
        <hr className='w-full  h-[4px]' />
      </div>
    </div>


    <div className=''>

      <div className=" h-10 w-10  border border-[#337eff] p-4 m-4 
       bg-[#555555] flex justify-center items-center">

        <h5 className="text-[#FFFFFF]">2006</h5>
      </div>
      <div>
        <h4 className='text-[#FFFFFF]'>
        
       Bachelor of Arts, Standford University  </h4>
      </div>
      <div className='pt-4'>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        </p>
      </div>

      <div className="pt-10">
        <hr className='w-full  h-[4px]' />
      </div>
    </div> */}




  </section>





  )
}

export default education