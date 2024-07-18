import { ArrowBigRight, LogOut } from "lucide-react"
import { Mail } from "lucide-react"
import landingBg from "../assets/images/landingBg.png"
import { Link } from "react-router-dom"
import logoLp from "../assets/images/logoLp.png"

const Landing = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <div className="flex justify-between items-center">
        <div className="flex items-center pb-4">
          <img src={logoLp} alt="logo" className="h-28 w-32" />
          <p className="text-lg font-semibold mb-5 mr-8">Spectrum Portfolio</p>
        </div>
        <Link to="/signup" className="flex items-center text-white bg-[#337eff] py-2 px-4 rounded mb-5">
          <ArrowBigRight className="mr-2 " />login/signup
        </Link>
      </div>
      <div className="w-screen relative flex-grow">
        <img src={landingBg} alt="background image" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60">
          <h1 className="text-4xl font-bold mb-4">We're Here Together</h1>
          <p className="text-lg mb-6">Join us in creating a vibrant portfolio community</p>
          <Link to="/signup" className="text-white bg-[#337eff] py-2 px-6 rounded">
            login/signup
          </Link>
        </div>
      </div>
      <footer className="bg-black text-white py-2 mt-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="font-mono text-xl p-2 text-center">Subscribe to our <br />newsletter</p>
          <div className="flex items-center bg-transparent border-2 rounded-3xl p-2">
            <input
              type="email"
              placeholder="Input email here"
              className="flex-grow p-2 rounded-l-3xl border-none focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center text-center text-white h-10 px-4 py-2 bg-[#337eff] hover:bg-black rounded-r-3xl"
            >
              <Mail className="mr-2" />
              <b>Subscribe</b>
            </button>
          </div>
          <div className="flex items-center">
            <img src={logoLp} alt="logo" className="h-28 w-32" />
            <p className="text-xl mb-5 mr-8">Spectrum Portfolio <b>@2024 Spectrum, Inc.</b></p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Landing