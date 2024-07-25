import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteExperience, apiGetExperience } from "../../../services/experience";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import PageLoader from "../../../components/PageLoader";

const Experience = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchExperience = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetExperience()
      console.log(res.data)
      setExperience(res.data.Projects)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteExperience(_id)
      console.log(res.data)
     toast.success(res.data)
    
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    }
  }

  useEffect(() => {
    fetchExperience()
  }, [])

  return (
    <PagesLayout
      headerText="Experience"
      buttonText="Add new Experience"
      onClick={() => navigate("/dashboard/experience/add")}
    >
     {
      isLoading ? <PageLoader/> :
      <div>
        {
          experience.length == 0 ? <p>No Experience added yet</p> :
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {experience.map(({ company, position, duration, description }, index) => (
          <div
            key={index}
            className="shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="uppercase font-bold">{company}</span>
              <div className="flex gap-2">
                <button className="bg-primary p-2 rounded-full text-white">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDelete(id)} className="bg-primary  p-2 rounded-full text-white">
                          {
                            isDeleting ? <Loader/> : <TrashIcon />
                          }
                        </button>
              </div>
            </div>
            <div className="mt-2">
              <span className="block ">{position}</span>
              <span className="block ">{duration}</span>
              <span className="block mt-1">{description}</span>
            </div>
          </div>
        ))}
      </div>
        }
      </div>
     }
    </PagesLayout>
  );
};

export default Experience;
