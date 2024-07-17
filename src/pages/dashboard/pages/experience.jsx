import { useNavigate } from "react-router-dom"
import PagesLayout from "../layouts/pagesLayout"
import K from "../../../constants"
import { Edit, Trash2Icon, TrashIcon } from "lucide-react"


const Experience = () => {
  const navigate = useNavigate()
  return (
    
    <PagesLayout headerText="Experience" buttonText="Add new Experience"  onClick={() => navigate("/dashboard/experience/add")} >
      <div className="grid grid-cols-1 gap-5 mt-10">
        {K.EXPERIENCES.map(({company, position, duration, description}, index) =>
        <div
        key={index} 
        className="h-40 shadow-md rounded-xl flex flex-col p-5"
        >
          <div className="ml-auto flex gap-x-2 ">
            <span  className="bg-primary p-2 rounded-full text-white">
              <Edit/>
            </span>
            <span  className="bg-primary p-2 rounded-full text-white">
              <TrashIcon/>
            </span>
          </div>
          <span className="uppercase font-bold ">{company}</span>
          <span>{position}</span>
          <span>{duration}</span>
          <span>{description}</span>
        </div>
      
      )}
      </div>

    </PagesLayout>
  )
}

export default Experience