import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { apiLogin } from "../../services/auth";
import { useState } from "react";

const LogIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(isSubmitting);
  const onSubmit = async (data) => {

    console.log(data);

    setIsSubmitting(true)
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response", res.data);
      // redirect user to the dashboard,
      navigate("/dashboard");



    } catch (error) {
      console.log(error);
    }

    finally {
      setIsSubmitting(false)

    }
  }
  return (

    <div className="h-[800px] flex items-center justify-center " >
      <div className="flex flex-row shadow-lg rounded-xl items-center justify-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#59BEF1] rounded-xl flex place-content-center text-xl font-bold">
            <div className="mx-28">
              <div className="m-9">
                <h1>SIGN IN</h1>
                <p>use your account</p>
              </div>

              <label
                htmlFor="email"
                className="block text-black mb-1 ml-4"
              >
                Email/Username
              </label>
              <input
                type="text"
                id="email"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
                {
                ...register("email", { required: "email is not provided" })
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
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("password", { required: "provide password" })
                }
              />
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              <div className=" m-10 ml-16">
                <button type="submit" className="h-10 w-40 px-3 
            py-2 bg-[#9CA3AF]
             text-black border-2 rounded-3xl hover:bg-[#e5e1e6]"
                >
                  {isSubmitting ? "loading...." : "sign in"}
                </button>
              </div>
            </div>
          </form>

        </div>

        <div className="bg-[#9CA3AF] h-[390px] rounded-xl w-[500px] flex items-center justify-center">
          <div className=" text-xl fontFamily-['arial']">
            <h1> Hello, Friend!</h1>
            <p>Enter your personal details <br />to start your journey with us</p>
            <p>Don't have an account?</p>
            <Link to="/signup" className="underline font-bold">
              SIGN UP
            </Link>
          </div>

        </div>
      </div>


    </div>
  )
}

export default LogIn