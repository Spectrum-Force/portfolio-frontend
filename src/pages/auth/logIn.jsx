import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { apiLogin } from "../../services/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader";
import signing from "../../assets/images/signing.png"

const LogIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  console.log(isSubmitting);

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);

  }


  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response", res.data);


      addToLocalStorage(res.data.accessToken, res.data.user)
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
     

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
      <div className="flex flex-row shadow-lg m-32 ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className=" flex place-content-center text-xl font-serif">
            <div className="mx-28">
              <div className="m-9">
                <h1>SIGN IN</h1>
                <p>Use your account</p>
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
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg "
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
                className=" bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
                {
                ...register("password", { required: "provide password" })
                }
              />
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
              <div className=" flex pl-10">
                <div className="text-center text-white my-8 pb-8 h-10 w-40 px-3 py-2 bg-[#337eff] border-2 rounded-3xl hover:bg-gray-400">
                  <button type="submit">
                    {isSubmitting ? <Loader /> : "Sign in"}
                  </button>
                </div>
              </div>

            </div>
          </form>

        </div>

        <div className="bg-[#337eff] place-content-center">
          <div className="text-center text-white font-mono text-lg m-20">
            <h1> Hello, Friend!</h1>
            <p>Enter your personal details <br />to start your journey with us</p>
            <Link to="/signup" className="underline">
              SIGN UP
            </Link>
          </div>

        </div>

        <div>
          <img src={signing} alt="signing" className="bottom-right-image " />
        </div>
      </div>

    </div>
  )
}

export default LogIn