import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteProject, apiGetProjects } from "../../../services/projects";
import PageLoader from "../../../components/PageLoader";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.Projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteProject(_id);
      console.log(res.data);
      toast.success(res.data);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <PagesLayout
      headerText="Projects"
      buttonText="Add Project"
      onClick={() => navigate("/dashboard/projects/add")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {projects.length == 0 ? (
            <p>No Project added yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {projects.map(
                (
                  {
                    name,
                    description,
                    contributors,
                    institution,
                    startDate,
                    endDate,
                    id,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <span className="uppercase font-bold">{name}</span>
                      <div className="flex gap-2">
                        <button className="bg-primary p-2 rounded-full text-white">
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          className="bg-primary  p-2 rounded-full text-white"
                        >
                          {isDeleting ? <Loader /> : <TrashIcon />}
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="block ]">{description}</span>
                      <span className="block ">{contributors}</span>
                      <span className="block">{institution}</span>
                      <div className="flex justify-between text-gray-700 mt-1">
                        <span>{startDate}</span>
                        <span>{endDate}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Projects;
