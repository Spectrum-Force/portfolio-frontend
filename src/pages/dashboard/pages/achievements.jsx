import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"


const Achievements = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Achievements" buttonText="Add New Achievement" onClick={() => navigate("/dashboard/achievements/add")}>
        <span>Achievements List here</span>
    </PagesLayout>
  )
}

export default Achievements