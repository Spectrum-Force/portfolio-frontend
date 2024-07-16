import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout"
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";



const Skills = () => {
const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add New skill" onClick={() => navigate("/dashboard/skills/add")} >
      <div className="grid grid-cols-4 gap-6 mt-10">
      {K.SKILLS.map(({name, levelOfProciency}, index) => (
          <div
           key={index}
           className="h-40 shadow-md rounded-xl flex flex-col p-5">
            <div className="ml-auto flex gap-x-2"> 
            <span className="bg-primary p-2 rounded-full text-white">
                <Edit/>
              </span>
              <span className="bg-primary p-2 rounded-full text-white">
                <TrashIcon/>
              </span>      
            </div>
            <span>{name}</span>
            <span>{levelOfProciency}</span>
          </div>
        )

        )}
      </div>


          
    </PagesLayout>
  );
};

export default Skills