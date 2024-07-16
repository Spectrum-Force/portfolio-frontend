import { useNavigate } from "react-router-dom"
import { education } from "../../../assets"
import PagesLayout from "../layouts/pagesLayout"


const Education = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Education" buttonText="Add new" onClick={() => navigate("/dashboard/education/add")}>
      <span>Education here</span>
      <div>
        <img className="h-[500px]" src={education} alt="" />
      </div>
    </PagesLayout>
  )
}

export default Education