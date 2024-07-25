import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/pagesLayout";
import K from "../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteEducation, apiGetEducation } from "../../../services/education";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import PageLoader from "../../../components/PageLoader";

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchEducation = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetEducation()
      console.log(res.data)
      setEducation(res.data.Education)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteEducation(_id)
      console.log(res.data)
     toast.success(res.data)
    
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])


  return (
    <PagesLayout
      headerText="Education"
      buttonText="Add new"
      onClick={() => navigate("/dashboard/education/add")}
    >
      {
        isLoading ? <PageLoader/> :
        <div>
          {
             education.length == 0 ? <p>No Education added yet</p> :
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
             {education.map(
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
                       <button onClick={() => handleDelete(id)} className="bg-primary  p-2 rounded-full text-white">
                                 {
                                   isDeleting ? <Loader/> : <TrashIcon />
                                 }
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
          }
        </div>
      }
      
    </PagesLayout>
  );
};

export default Education;
