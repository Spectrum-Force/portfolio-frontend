import React, { useState } from 'react'
import { apiAddProject } from '../../../services/projects';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Loader from '../../../components/loader';

const AddProject = () => {

  const {
    register,
    handleSubmit,
     formState: { errors } } = useForm();
     const [isSubmitting, setIsSubmitting] = useState(false)
  
    const onSubmit = async (data) => {
     console.log(data);
     setIsSubmitting(true)
      try {
        const res = await apiAddProject({

          projectName: data.name,
          description: data.description.toLowerCase(),
          contributors: data.contributors,
          skills: data.skills,
          link : data.link,
          nameOfInstitution: data.institution,
          startDate: data.startDate,
          endDate: data.endDate,
        });
  
        console.log(res.data);
        toast.success(res.data.message)
      } catch (error) {
        console.log(error)
        toast.error("An error occured")
      } finally{
        setIsSubmitting(false)
      }
    };



  return (
    <div className="h-screen">
    <h1  className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Project</h1>
    <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
  <form onSubmit={handleSubmit(onSubmit)} className="place-content-center m-8">
    <div className="grid grid-cols-2 gap-8">
      <div>
  
        <label
          htmlFor="projectName"
          className="block   mb-1 ml-4"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          {...register("projectName", {required: "name is required"})}
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="description"
          className="block   mb-1 ml-4"
        >
         Description
        </label>
        <input
          type="text"
          id="description"
          {...register("description", {required:"description is required"})}
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="contributors"
          className="block   mb-1 ml-4"
        >
          Contributors
        </label>
        <input
          type="text"
          id="contributors"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="skills"
          className="block   mb-1 ml-4"
        >
          Skills
        </label>
        <input
          type="text"
          id="skills"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
      </div>
      <div>
        <label
          htmlFor="link"
          className="block   mb-1 ml-4"
        >
         Link
        </label>
        <input
          type="text"
          id="link"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="nameOfInstituition"
          className="block   mb-1 ml-4"
        >
          Instituition
        </label>
        <input
          type="text"
          id="nameOfInstituition"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="startDate"
          className="block   mb-1 ml-4"
        >
          Start Date
        </label>
        <input
          type="text"
          id="startDate"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        <label
          htmlFor="endDate"
          className="block   mb-1 ml-4"
        >
         End Date
        </label>
        <input
          type="text"
          id="endDate"
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
       
      </div>
    </div>
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
      >
      {isSubmitting? <Loader/> : "Add Project" }
      </button>
    </div>
  </form>
</div>
  </div>
  )
}

export default AddProject