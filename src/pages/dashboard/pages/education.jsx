import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";

const Education = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Education"
      buttonText="Add new"
      onClick={() => navigate("/dashboard/education/add")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {K.EDUCATION.map(
          (
            { institution, program, qualification, startDate, endDate },
            index
          ) => (
            <div
              key={index}
              className="shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{institution}</span>
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
                <span className="block font-medium">{program}</span>
                <span className="block">{qualification}</span>
                <span className="block mt-1">
                  {startDate} - {endDate}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </PagesLayout>
  );
};

export default Education;
