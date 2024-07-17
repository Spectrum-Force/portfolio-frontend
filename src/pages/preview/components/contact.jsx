



const contact = () => {
  return (
    <div className="bg-[#555555]  pt-40 " id="contact">


      <div className="flex justify-center text-[#337eff] ">
        <h1>Have a question</h1>
      </div>
      <div className="flex justify-center text-[50px] text-[#FFFFFF]">
        <h1>Contact me now</h1>
      </div>



      <div className="flex flex-row gap-10 pt-20 justify-center">

        <div className="space-y-14">


          <div>
            <input
              className=' h-15 w-96 px-6 py-2 focus:outline-none border-solid
         border-2  border-[#999999] rounded-md bg-[#555555]'
              type="text"
              placeholder='Your Name'
            />
          </div>
          <div>
            <input
              className=' h-15 w-96 px-6 py-2 focus:outline-none border-solid
         border-2  border-[#999999] rounded-md bg-[#555555]'
              type="text"
              placeholder='Your email'
            />
          </div>
          <div>
            <input
              className=' h-15 w-96 px-6 py-2 focus:outline-none border-solid
         border-2  border-[#999999] rounded-md bg-[#555555]'
              type="text"
              placeholder='Your phone number'
            />
          </div>






        </div>



        <div>
          <input
            className=' h-60  px-40 py-2 focus:outline-none border-solid
         border-2 border-[#999999] rounded-md bg-[#555555]'
            type="text"
            placeholder='Your message'
          />
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
        <button
          className='px-8 py-2 border-solid border-2 border-[#337eff]  bg-[#337eff]
							text-md text-[#337eff]rounded-md hover:bg-[#337eff] hover:text-[#FFFFFF] transition-all'
          type='submit'>
          Submit form
        </button>
      </div>






     

      

    </div>
  )
}

export default contact