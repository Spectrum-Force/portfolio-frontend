import { useNavigate } from "react-router-dom"
import { education } from "../../../assets"
import PagesLayout from "../layouts/pagesLayout"
import K from "../../../constants"
import { Edit, TrashIcon } from "lucide-react"


const Education = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Education" buttonText="Add new" onClick={() => navigate("/dashboard/education/add")}>
      
      <div>
        {K.EDUCATION.map(({institution,program,qualification,startDate,endDate}, index) =>
         <div
        key={index} 
        className="h-52 shadow-md rounded-xl flex flex-col p-5"
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
          <span className="font-bold">{institution}</span>
          <span>{program}</span>
          <span>{qualification}</span>
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>

        )}
      </div>
    </PagesLayout>
  )
}

export default Education