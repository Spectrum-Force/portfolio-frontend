import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"


const Projects = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Projects" buttonText="Add Project" onClick={() =>navigate ("/dashboard/projects/add")}>
      <span>Projects list</span>
    </PagesLayout>
  )
}

export default Projects