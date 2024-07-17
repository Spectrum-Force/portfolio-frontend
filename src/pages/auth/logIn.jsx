import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import backgroundImage from "../../assets/images/signUpBg.png"

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
      localStorage.setItem("accessToken", res.data.accessToken)

      toast.success(res.data.message);
      setTimeout(() => { // redirect user to the dashboard,
        navigate("/dashboard");
      }, 5000)
    } catch (error) {
      console.log(error);
      toast.error("An error occured");

    }

    finally {
      setIsSubmitting(false)

    }
  }
  return (

    <div className="bg-signUpBg flex items-center justify-center" >
      <div className="flex flex-row shadow-lg m-48">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className=" flex place-content-center text-xl font-bold">
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
                placeholder="email/username"
                className="bg-slate-300 h-10 w-full px-2 py-1 border-black border-2 rounded-lg "
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
                placeholder="password"
                className=" bg-slate-300 h-10 w-full px-2 py-1 border-black border-2 rounded-lg"
                {
                ...register("password", { required: "provide password" })
                }
              />
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              <div className=" flex pl-10">
              <div className="text-center text-white m-4 pb-8 h-10 w-40 px-3 py-2 bg-[#337eff] border-2 rounded-3xl hover:bg-black">
                <button type="submit" className=""

                >
                  {isSubmitting ? <Loader/>: "Sign in"}
                </button>
              </div>
              </div>
              
            </div>
          </form>

        </div>

        <div className="bg-[#337eff] place-content-center">
          <div className="items-center text-white font-extrabold italic text-lg m-20">
            <h1> Hello, Friend!</h1>
            <p>Enter your personal details <br />to start your journey with us</p>
            <p>Don't have an account?</p>
            <Link to="/signup" className="underline">
              SIGN UP
            </Link>
          </div>

        </div>
      </div>


    </div>
  )
}

export default LogIn