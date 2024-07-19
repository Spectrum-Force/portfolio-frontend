import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import AchievementCard from "../../../components/achievementCard"
import { education, lady, trophy } from "../../../assets"


const Achievements = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Achievements" buttonText="Add New Achievement" onClick={() => navigate("/dashboard/achievements/add")}>
        <span>Achievements List here</span>
       <div className="flex flex-row gap-x-5">
       <AchievementCard
       image = {education}
       award = "IT GG"
       nameOfInstitution="MEST"
       description="gdrr juiygyf ytftdr"
       date="20th June 2000"
       />
       <AchievementCard 
        image = {lady}
        award = "IT GG"
        nameOfInstitution="MEST"
        description="gdrr juiygyf ytftdr"
        date="20th June 2000"
       />
       <AchievementCard 
        image = {lady}
        award = "IT GG"
        nameOfInstitution="MEST"
        description="gdrr juiygyf ytftdr"
        date="20th June 2000"
       />
       <AchievementCard 
        image = {lady}
        award = "IT GG"
        nameOfInstitution="MEST"
        description="gdrr juiygyf ytftdr"
        date="20th June 2000"
       />
       </div>
    </PagesLayout>
  )
}

export default Achievements