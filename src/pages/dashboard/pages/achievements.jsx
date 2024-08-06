import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import AchievementCard from "../../../components/achievementCard"
import { education, lady, trophy } from "../../../assets"
import { useEffect, useState } from "react"
import { apiDeleteAchievement, apiGetAchievements } from "../../../services/achievements"
import { toast } from "react-toastify"
import PageLoader from "../../../components/PageLoader"


const Achievements = () => {
  const navigate = useNavigate()
  const [achievement, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchAchievements = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetAchievements()
      console.log(res.data)
      setAchievements(res.data.Achievements)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteAchievement(_id)
      console.log(res.data)
     toast.success(res.data)
    
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    }
  }

  useEffect(() => {
    fetchAchievements()
  }, [])


  return (
    <PagesLayout 
    headerText="Achievements" 
    buttonText="Add New Achievement" 
    onClick={() => navigate("/dashboard/achievements/add")}
    >
      {
        isLoading ? <PageLoader/> :
        <div>
          {
          achievement.length == 0 ? <p>No achievement added</p> :
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
          }
        </div>
      }
        
      
    </PagesLayout>
  )
}

export default Achievements