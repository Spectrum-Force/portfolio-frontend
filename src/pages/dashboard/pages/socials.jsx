import { back } from "../../../assets"
import SocialCard from "../../../components/socialCard"

const Socials = () => {
  return (
    <div className="relative flex justify-center items-center h-full bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10">
        <SocialCard />
      </div>
    </div>
  )
}

export default Socials
