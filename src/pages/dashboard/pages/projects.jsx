import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import K from "../../../constants"
import { Edit, TrashIcon } from "lucide-react"


const Projects = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Projects" buttonText="Add Project" onClick={() =>navigate ("/dashboard/projects/add")}>
      <div className="grid grid-cols-1 gap-5 mt-5">
      {K.PROJECTS.map(({name, description, contributors, institution, startDate, endDate}, index) =>
      <div
      key={index} 
      className="h-54 shadow-md rounded-xl flex flex-col p-5"
      >
        <div className="ml-auto flex gap-x-2 ">
          <span  className="bg-primary p-2 rounded-full text-white">
            <Edit/>
          </span>
          <span  className="bg-primary p-2 rounded-full text-white">
            <TrashIcon/>
          </span>
        </div>
        <span className="uppercase font-bold ">{name}</span>
        <span>{description}</span>
        <span>{contributors}</span>
        <span>{institution}</span>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    )}
      </div>
    </PagesLayout>
  )
}

export default Projects