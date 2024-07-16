import React from 'react'

const AddSkills = () => {
  return (
    <div className="h-screen">
    <h1  className="flex justify-center font-bold text-3xl mb-8">Add Skill</h1>
    <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
  <form className="place-content-center m-8">
    <div className="">
      <div>
  
        <label
          htmlFor="name"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        
        <label
          htmlFor="levelOfProficiency"
          className="block text-[#FF9C60] font-bold mb-1 ml-4"
        >
         Level Of Proficiency
        </label>
        <select
          id=""
          name="levelOfProficiency"
          className="h-8 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
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

export default AddSkills