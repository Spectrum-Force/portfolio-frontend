

const SignUp = () => {
  return (
    <div className="flex flex-col  bg-[#EDFF4E]">

      <div className="text-center font-bold text-3xl">
      <h1>Sign Up</h1>
      <p>use your account</p>
      </div>

      <form onSubmit={SignUp} className="mx-80">
        <div>
          <label
            htmlFor="firstName"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            First name
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="lastName"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Last name
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="otherNames"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Other names
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="email"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >

            Email
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="password"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Password
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="confirmPassword"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="userName"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Username
          </label>
          <input
            type="text"
            id="true"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="termsAndConditions"
            className="block text-[#FF9C60] font-bold mb-1 ml-4"
          >
            Terms and Conditions
          </label>
          <input
            type="boolean"
            id="name"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
          />
        </div>

        <div>
          <button type="submit" className=" mt-5 h-10 w-40 px-3 py-2 bg-[#FF9C60] border-2 rounded-3xl hover:bg-[#e7d7e9]"
          >Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp