import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout"
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skills";
import PageLoader from "../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";



const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchSkills = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetSkills()
      console.log(res.data)
      setSkills(res.data.Skills)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data)
    
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])
  return (
    <PagesLayout headerText="Skills" buttonText="Add New skill" onClick={() => navigate("/dashboard/skills/add")} >
      {
        isLoading ? <PageLoader /> :
          <div>
            {
              skills.length == 0 ? <p>No skill added yet</p> :
                <div className="grid grid-cols-4 gap-6 mt-10">
                  {skills.map(({ name, levelOfProciency, id }, index) => (
                    <div
                      key={index}
                      className=" h-40 shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between">
                      <div className="ml-auto flex gap-x-2">
                        <button className="bg-primary p-2 rounded-full text-white">
                          <Edit />
                        </button>
                        <button onClick={() => handleDelete(id)} className="bg-primary  p-2 rounded-full text-white">
                          {
                            isDeleting ? <Loader /> : <TrashIcon />
                          }
                        </button>
                      </div>
                      <span>{name}</span>
                      <span>{levelOfProciency}</span>
                    </div>
                  )

                  )}
                </div>
            }
          </div>

      }


    </PagesLayout>
  );
};

export default Skills