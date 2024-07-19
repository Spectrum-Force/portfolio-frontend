import { git, linked, twitter } from "../assets"


const SocialCard = () => {
  return (
    <div >
      <div className="flex flex-row gap-x-5 ">
        <div className="shadow-md rounded-xl p-5 hover:bg-primary mt-20 flex flex-col justify-center items-center  overflow-hidden  bg-white  h-[200px] w-[200px] ">
          <link rel="stylesheet" href="" />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="git" className="h-10 rounded " />
          </a>
          <div className="mt-4">
            <h2 className="font-bold text-xl mb-2">GitHub </h2>


          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center hover:bg-primary items-center max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 h-[200px] w-[200px] ">
          <link rel="stylesheet" href="" />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="git" className="h-10 rounded " />
          </a>
          <div className="mt-4">
            <h2 className="font-bold text-xl mb-2">Twitter</h2>

          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center hover:bg-primary items-center max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 h-[200px] w-[200px] ">
          <link rel="stylesheet" href="" />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linked} alt="git" className="h-10 rounded " />
          </a>
          <div className="mt-4">
            <h2 className="font-bold text-xl mb-2">LinkedIn</h2>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SocialCard