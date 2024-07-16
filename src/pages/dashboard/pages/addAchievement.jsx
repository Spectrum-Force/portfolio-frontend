import React from 'react'

const AddAchievement = () => {
  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8">Add Achievement</h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
        <form className="place-content-center m-8">
          <div className="grid grid-cols-2 gap-8">

            <div>
              <label
                htmlFor="award"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Award
              </label>
              <input
                type="text"
                id="award"
                name="award"
                placeholder="Enter the award name"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
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
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label
                htmlFor="imageUpload"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Upload an Image
              </label>
              <input
                type="file"
                id="imageUpload"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label
                htmlFor="date"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
            </div>
            <div>
              <label
                htmlFor="nameOfInstitution"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
               Instituition
              </label>
              <input
                type="text"
                id="nameOfInstituition"
                placeholder="Name of Institution"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label
                htmlFor="confirmPassword"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label
                htmlFor="userName"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label
                htmlFor="termsAndConditions"
                className="block text-[#FF9C60] font-bold mb-1 ml-4"
              >
                Terms and Conditions
              </label>
              <input
                type="text"
                id="termsAndConditions"
                className="h-8 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-[#FF9C60] border-2 rounded-3xl hover:bg-[#e7d7e9]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AddAchievement