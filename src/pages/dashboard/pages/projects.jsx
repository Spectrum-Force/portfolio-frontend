import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Projects"
      buttonText="Add Project"
      onClick={() => navigate("/dashboard/projects/add")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {K.PROJECTS.map(({ name, description, contributors, institution, startDate, endDate }, index) => (
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
                <button className="bg-primary p-2 rounded-full text-white">
                  <TrashIcon size={16} />
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
        ))}
      </div>
    </PagesLayout>
  );
};

export default Projects;