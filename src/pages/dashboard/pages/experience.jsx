import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"


const Experience = () => {
  const navigate = useNavigate()
  return (
    
    <PagesLayout headerText="Experience" buttonText="Add new Experience"  onClick={() => navigate("/dashboard/experience/add")} >
      <span>Experience List</span>

    </PagesLayout>
  )
}

export default Experience