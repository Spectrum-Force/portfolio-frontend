
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiCheckUsernameExists, apiSignUp } from "../../services/auth";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import Loader from "../../components/loader";
import signing from "../../assets/images/signing.png"


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const [isUsernameLoading, setIsUsernameLoading] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm();

  const checkUserName = async (userName) => {
    console.log("I've been called");
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(userName)
      console.log(res.data)
      const user = res.data.user
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }
    finally {
      setIsUsernameLoading(false);
    }
  };

  const userNameWatch = watch("userName")
  console.log(userNameWatch);

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch)
      }

    }, 5000)
    debouncedSearch()
    return () => {
      debouncedSearch.cancel();
    }

  }, [userNameWatch]);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password,
      email: data.email,
      confirmedPassword: data.password,
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignUp(payload);
      console.log(res.data)
      toast.success(res.data)
      setTimeout(() => {
        navigate("/login");
      }, 5000)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false)
    }
  };
  return (
    <div className=" flex items-center justify-center rounded-xl">
      <div className=" flex flex-row shadow-lg m-48 ">

        <div className="flex justify-center items-center h-screen bg-[#337eff]">
          <div className="text-center text-white font-mono text-lg m-20">
            <h1 className="font-extrabold text-3xl">
              Welcome!
            </h1>
            <p>To keep connected with us please login with your info!</p>
            <Link to="/login" className="underline">Sign In Here</Link>
          </div>
        </div>

        <div className="">
          <form className="[h-500px] w-[500px] flex flex-row place-content-center font-serif" onSubmit={handleSubmit(onSubmit)}  >
            <div>
              <div className="text-center  text-3xl p-3 pt-10">
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
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-[2px] rounded-md"
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
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
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
                className=" bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
                {
                ...register("otherNames",)
                }
              />
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
                className=" bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
                {
                ...register("userName", { required: "not provided, minLength: 8" })
                }
              />
              {errors.userName && (<p className="text-red-500">{errors.userName.message}</p>)}
              <div flex items-center gap-x-2>
                {isUsernameLoading && <Loader />}
                {usernameAvailable && (<p className="text-green-500">Username is available!</p>
                )}
                {usernameNotAvailable && (<p className="text-red-500"> Username is already taken!</p>
                )}
              </div>
              <div className="flex flex-col w-full space-y-1"></div>

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
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"

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
                className="bg-slate-300 h-10 w-full px-2 py-1 border-gray-400 border-2 rounded-lg"
                {
                ...register("password", { required: "Password is not provided, minLength:8" })
                }
              />
              {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}

              <div className="flex items-start pt-5">
                <div className="flex items-center h-5 ">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border " />
                </div>
                <div className="ml-3 text-sm  ">
                  <label htmlFor="terms" className="font-light text-black">I accept the <Link className="font-medium text-primary-600 hover:underline " to="#">Terms and Conditions</Link> </label>
                </div>
              </div>
              <div className="flex pl-10">
                <div className="text-center text-white m-4 pb-8 h-10 w-40 px-3 py-2 bg-[#337eff] border-2 rounded-3xl hover:bg-gray-400">
                  <button type="submit"
                  >
                    {isSubmitting ? <Loader /> : "Sign Up"}
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>

        <div>
        <img src={signing} alt="signing" className="bottom-right-image-two" />
      </div>
      </div>
     
    </div>

  )
}

export default SignUp