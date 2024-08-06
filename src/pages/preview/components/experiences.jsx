import React from 'react'

const experiences = ({insight}) => {
  return (
    <section className='pt-10 flex flex-col items-center'>
      <div className='flex justify-center text-[50px] text-[#FFFFFF]'>
          <h1>Experiences</h1>
        </div>
      {insight.map((insight) => (
        <div className=''>

        
        <div className=" h-10 w-40 flex justify-center items-center border border-[#337eff] p-4 m-4 
         bg-[#555555]">

          <h5 className="text-[#FFFFFF]">{new Date(insight.startDate).toLocaleDateString("en-US")}   -   {new Date(insight.endDate).toLocaleDateString("en-US")}</h5>
        </div>
        <div>
          <h4 className='text-[#FFFFFF]'>
            {insight.companyName}</h4>
        </div>
        <div className='pt-4'>
        <p>{insight.location}
        </p>
      </div>
      <div className='pt-4'>
        <p>{insight.role}
        </p>
      </div>
        <div className='pt-4'>
          <p>{insight.responsibility}
          </p>
        </div>

        <div className="pt-10">
          <hr className='w-full  h-[4px]' />
        </div>
      </div>
      )

      )}
      


      {/* <div className=''>

        <div className=" h-10 w-40  border border-[#337eff] p-4 m-4 
         bg-[#555555] flex justify-center items-center">

          <h5 className="text-[#FFFFFF]">2010-2014</h5>
        </div>
        <div>
          <h4 className='text-[#FFFFFF]'>
            
              Creative Director at Pixar Studio</h4>
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

        <div className=" h-10 w-40  border border-[#337eff] p-4 m-4 
         bg-[#555555] flex justify-center items-center">

          <h5 className="text-[#FFFFFF]">2006-2010</h5>
        </div>
        <div>
          <h4 className='text-[#FFFFFF]'>
          Web Designer at Microsoft</h4>
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

export default experiences