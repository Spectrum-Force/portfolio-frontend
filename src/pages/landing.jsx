import { ArrowBigRight } from "lucide-react"
import { Mail } from "lucide-react"
import landingBg from "../assets/images/landingBg.png"
import { Link } from "react-router-dom"
import logoLp from "../assets/images/logoLp.png"

const Landing = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logoLp} alt="logo" className="h-8 w-10 mr-2" />
          <p className="text-lg font-semibold text-black">Spectrum Portfolio</p>
        </div>
        <Link to="/signup" className="flex items-center text-white bg-[#337eff] py-2 px-4 rounded">
          <ArrowBigRight className="mr-2" /> Login/Signup
        </Link>
      </header>
      <main className="w-screen relative flex-grow">
        <img src={landingBg} alt="background image" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-80 p-4">
          <h1 className="text-4xl font-bold mb-4">We're Here Together</h1>
          <p className="text-lg mb-6">Join us in creating a vibrant portfolio community</p>
          <Link to="/signup" className="text-white bg-[#337eff] py-2 px-6 rounded">
            Login/Signup
          </Link>
        </div>
      </main>
      <footer className="bg-black text-white py-4">
        <div className="flex flex-col items-center">
          <p className="font-mono text-xl text-center mb-4">Subscribe to our newsletter</p>
          <div className="flex items-center bg-transparent border-2 rounded-full p-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Input email here"
              className="flex-grow p-2 rounded-l-full border-none focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center text-center text-white h-10 px-4 py-2 bg-[#337eff] hover:bg-black rounded-r-full"
            >
              <Mail className="mr-2" />
              <b>Subscribe</b>
            </button>
          </div>
          <div className="flex items-center mt-4">
            <img src={logoLp} alt="logo" className="h-8 w-10 mr-2" />
            <p className="text-lg font-semibold">Spectrum Portfolio <b>@2024 Spectrum, Inc.</b></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
