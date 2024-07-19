import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, Trash2Icon, TrashIcon } from "lucide-react";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Experience"
      buttonText="Add new Experience"
      onClick={() => navigate("/dashboard/experience/add")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {K.EXPERIENCES.map(({ company, position, duration, description }, index) => (
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
                <button className="bg-primary p-2 rounded-full text-white">
                  <TrashIcon size={16} />
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
    </PagesLayout>
  );
};

export default Experience;
