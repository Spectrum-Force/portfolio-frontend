
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className=" flex items-center justify-center">
      <div className="flex flex-row shadow-lg m-48 rounded-xl">

        <div className="bg-[#9CA3AF] rounded-xl place-content-center">
          <div className="items-center text-white font-extrabold italic text-lg m-20">
            <h1> Welcome, Friend!</h1>
            <p>We're glad to have you back!</p>
            <Link to="/login" className="underline"> Sign In Here</Link>

          </div>

        </div>

        <div className="">
          <form className="bg-[#59BEF1] [h-500px] w-[500px] rounded-xl flex flex-row place-content-center text-xl font-bold" onSubmit={handleSubmit(onSubmit)}  >
            <div>
              <div className="text-center font-bold text-3xl p-3">
                <h1>Sign Up</h1>
              </div>
              <label
                htmlFor="firstName"
                className="block text-black mb-1 ml-4 "
              >
                First name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your first name"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("firstName", { required: "First name is not provided" })
                }
              />
              {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}
              <label
                htmlFor="lastName"
                className="block text-black mb-1 ml-4"
              >
                Last name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your last name"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("lastName", { required: "Last name is not provided" })
                }
              />
              {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}
              <label
                htmlFor="otherNames"
                className="block text-black mb-1 ml-4"
              >
                Other names
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter other names"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("otherNames",)
                }
              />
              <label
                htmlFor="email"
                className="block text-black mb-1 ml-4"
              >

                Email
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your email"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"

                {
                ...register("email", { required: "Email is not provided" })
                }
              />
              {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
              <label
                htmlFor="password"
                className="block text-black mb-1 ml-4"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("password", { required: "Password is not provided, minLength:8" })
                }
              />
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              <label
                htmlFor="confirmPassword"
                className="block text-black mb-1 ml-4"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="confirmPassword"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("confirmPassword", { required: "not provided, minLength: 8" })
                }
              />
              {errors.confirmPassword && (<p className="text-red-500">{errors.confirmPassword.message}</p>)}
              <label
                htmlFor="userName"
                className="block text-black mb-1 ml-4"
              >
                Username
              </label>
              <input
                type="text"
                id="true"
                placeholder="username"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("username", { required: "not provided, minLength: 8" })
                }
              />
              {errors.username && (<p className="text-red-500">{errors.username.message}</p>)}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border " />
                </div>
                <div className="ml-3 text-sm  ">
                  <label htmlFor="terms" className="font-light text-black">I accept the <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>
                </div>
              </div>
              <div className=" m-5 h-10 w-40 px-3 py-2 bg-[#9CA3AF] border-2 rounded-3xl hover:bg-[#e5e1e6] ">
               <button type="submit" 
                >Sign Up</button>
              </div>
            </div>
          </form>
        </div>


      </div>
    </div>

  )
}

export default SignUp