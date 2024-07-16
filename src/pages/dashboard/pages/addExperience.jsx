import React from 'react'

const AddExperience = () => {
  return (
    <div>
     <h1 className="flex justify-center font-bold text-3xl mb-8">Add Experience</h1>
    <div  className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
       <form onSubmit={AddExperience} className="place-content-center m-8" >
        <div className="">
          
          <label
            htmlFor="companyName"
            className="block text-[#FF9C60] font-bold mb-1 ml-4 "
          >
            Name of Company
          </label>
          <input
            type="text"
            id="companyName"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="role"
            className="block text-[#FF9C60] font-bold mb-1 ml-4 "
          >
           Role
          </label>
          <input
            type="text"
            id="role"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="responsibility"
            className="block text-[#FF9C60] font-bold mb-1 ml-4 "
          >
           Responsibility
          </label>
          <input
            type="text"
            id="responsibility"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="location"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="startDate"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="endDate"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
           End Date
          </label>
          <input
            type="text"
            id="endDate"
            className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          
        </div>

        <div>
          <button type="submit" className=" mt-5 h-10 w-40 px-3 py-2 bg-[#FF9C60] border-2 rounded-3xl hover:bg-[#e7d7e9]"
          >Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddExperience