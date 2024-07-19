

const AddProfile = () => {
  return (
    <div className="h-screen">
      <h1  className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Profile</h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
    <form className="place-content-center m-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
    
          <label
            htmlFor="profilePicture"
            className="block   mb-1 ml-4"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
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
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          />
          <label
            htmlFor="maritalStatus"
            className="block   mb-1 ml-4"
          >
            Marital Status
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="no">Prefer not to say</option>
          </select>
          <label
            htmlFor="sex"
            className="block   mb-1 ml-4"
          >
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block   mb-1 ml-4"
          >
            Bio
          </label>
          <input
            type="text"
            id="bio"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          />
          <label
            htmlFor="about"
            className="block   mb-1 ml-4"
          >
            About
          </label>
          <input
            type="text"
            id="about"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          />
          <label
            htmlFor="dateOfBirth"
            className="block   mb-1 ml-4"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          />
          <label
            htmlFor="contact"
            className="block   mb-1 ml-4"
          >
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
          />
          <label
            htmlFor="resume"
            className="block   mb-1 ml-4"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            accept=".pdf,.doc,.docx"
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
        >
         Submit
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default AddProfile