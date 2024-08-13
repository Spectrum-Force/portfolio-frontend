import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import AchievementCard from "../../../components/achievementCard"
import { education, lady, trophy } from "../../../assets"
import { useEffect, useState } from "react"
import { apiDeleteAchievement, apiGetAchievements } from "../../../services/achievements"
import { toast } from "react-toastify"
import PageLoader from "../../../components/PageLoader"
import { Edit, TrashIcon } from "lucide-react"


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
    {isLoading ? (
      <PageLoader />
    ) : (
      <div>
        {achievement.length === 0 ? (
          <p>No achievement added</p>
        ) : (
          <div className="flex flex-wrap gap-5 mt-5">
            {achievement.map(({ image, award, nameOfInstitution, description, date, id }) => (
              <div
                key={id}
                className="shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <span className="uppercase font-bold">{award}</span>
                  <div className="flex gap-2">
                    <button
                      className="bg-primary p-2 rounded-full text-white"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-primary p-2 rounded-full text-white"
                    >
                      {isDeleting ? <Loader /> : <TrashIcon />}
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="block">{image}</span>
                  <span className="block">{description}</span>
                  <span className="block">{nameOfInstitution}</span>
                  <div className="text-gray-700 mt-1">
                    <span>{date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </PagesLayout>

  )
}

export default Achievements