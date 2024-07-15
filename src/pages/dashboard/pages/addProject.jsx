import React from 'react'

const AddProject = () => {
  return (
    <div className="h-screen">
    <h1  className="flex justify-center font-bold text-3xl mb-8">Add Project</h1>
    <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
  <form className="place-content-center m-8">
    <div className="grid grid-cols-2 gap-8">
      <div>
  
        <label
          htmlFor="projectName"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="description"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
         Description
        </label>
        <input
          type="text"
          id="description"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="contributors"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
          Contributors
        </label>
        <input
          type="text"
          id="contributors"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="skills"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
          Skills
        </label>
        <input
          type="text"
          id="skills"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
      </div>
      <div>
        <label
          htmlFor="link"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
         Link
        </label>
        <input
          type="text"
          id="link"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="nameOfInstituition"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
          Instituition
        </label>
        <input
          type="text"
          id="nameOfInstituition"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
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
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
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
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
       
      </div>
    </div>
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="h-10 w-40 px-3 py-2 bg-[#FF9C60] border-2 rounded-3xl hover:bg-[#e7d7e9]"
      >
       Submit
      </button>
    </div>
  </form>
</div>
  </div>
  )
}

export default AddProject