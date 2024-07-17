import { github, linked, twitter } from "../assets"


const SocialCard = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3 max-w-screen-xl mx-auto px-4 ">
    <link rel="stylesheet" href="" />
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="git" className="h-10 rounded " />
    </a>
    <div className="mt-4">
      <h2 className="font-bold text-xl mb-2">GitHub </h2>
      
    </div>
    <link rel="stylesheet" href="" />
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="git" className="h-10 rounded " />
    </a>
    <div className="mt-4">
      <h2 className="font-bold text-xl mb-2">Twitter</h2>
      
    </div>
    <link rel="stylesheet" href="" />
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src={linked} alt="git" className="h-10 rounded " />
    </a>
    <div className="mt-4">
      <h2 className="font-bold text-xl mb-2">LinkedIn</h2>
      
    </div>

  </div>
  )
}

export default SocialCard