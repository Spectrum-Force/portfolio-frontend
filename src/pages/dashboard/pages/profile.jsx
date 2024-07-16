import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import { back, woman } from "../../../assets"


const Profile = () => {
  const navigate = useNavigate()
  return (
   <PagesLayout  headerText="Profile" buttonText="Add Profile" onClick={() => navigate ("/dashboard/profile/add")} >
    <div className="relative mt-5">
  <img src={back} alt="background" className="w-screen h-64 object-cover" />
  
  <div className="flex  absolute top-44 left-8  ">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
      <img src={woman} alt="profile" className="w-full h-full object-cover" />
    </div>
    
    <div className="ml-4 mt-20">
      <h1 className="text-4xl font-bold">Your Name</h1>
      <p className="mt-2 text-lg">Bio</p>
      <p className="mt-1 text-sm">About</p>
      <div className="flex gap-4 mt-2 text-lg">
        <p>Github</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
      <p className="mt-2">E-mail</p>
      <p>Resume</p>
    </div>
  </div>
</div>
    
   </PagesLayout>
  )
}

export default Profile