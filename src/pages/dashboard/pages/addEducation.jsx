import React from 'react'

const AddEducation = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Education</h1>
     <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
     <form onSubmit={AddEducation} className="place-content-center m-8" >
        <div className="">
          
          <label
            htmlFor="institutionName"
            className="block   mb-1 ml-4 "
          >
            Name of Institution
          </label>
          <input
            type="text"
            id="institutionName"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="location"
            className="block   mb-1 ml-4"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="program"
            className="block   mb-1 ml-4"
          >
            Program
          </label>
          <input
            type="text"
            id="program"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="qualification"
            className="block   mb-1 ml-4"
          >

            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="startDate"
            className="block   mb-1 ml-4"
          >
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="endDate"
            className="block   mb-1 ml-4"
          >
           End Date
          </label>
          <input
            type="text"
            id="endDate"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          
        </div>

        <div className="flex justify-center items-center mt-5">
          <button 
          type="submit" className=" mt-5 h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
          >Submit</button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default AddEducation