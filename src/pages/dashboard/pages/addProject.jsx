import React, { useState } from "react";
import { apiAddProject } from "../../../services/projects";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loader from "../../../components/loader";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.image[0])
    setIsSubmitting(true);
    try {
      const formData = new FormData();
  
      // Append all form data
      formData.append('projectName', data.projectName);
      formData.append('description', data.description.toLowerCase());
      formData.append('contributors', data.contributors);
      formData.append('skills', data.skills);
      formData.append('image', data.image[0]); // Append the image file
      formData.append('link', data.link);
      formData.append('nameOfInstitution', data.nameOfInstitution);
      formData.append('startDate', data.startDate);
      formData.append('endDate', data.endDate);
    
      // Send the form data
      const res = await apiAddProject(formData);

      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8 mt-10">
        Add Project
      </h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="place-content-center m-8"
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block   mb-1 ml-4">Project Name</label>
              <input
                type="text"
                id="projectName"
                {...register("projectName", { required: "name is required" })}
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />

              <label className="block   mb-1 ml-4">Description</label>
              <input
                type="text"
                id="description"
                {...register("description", {
                  required: "description is required",
                })}
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
              />

              <label className="block mb-1 ml-4">Contributors</label>
              <input
                type="text"
                id="contributors"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("contributors")}
              />

              <label className="block   mb-1 ml-4">Skills</label>
              <input
                type="text"
                id="skills"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("skills")}
              />
              <label htmlFor="" className="block   mb-1 ml-4">
                Upload an Image
              </label>
              <input
                type="file"
                id="image"
                className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("image")}
              />
            </div>

            <div>
              <label className="block   mb-1 ml-4">Link</label>
              <input
                type="text"
                id="link"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("link")}
              />

              <label className="block   mb-1 ml-4">Instituition</label>
              <input
                type="text"
                id="nameOfInstitution"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("nameOfInstitution")}
              />

              <label htmlFor="startDate" className="block   mb-1 ml-4">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("startDate")}
              />

              <label htmlFor="endDate" className="block   mb-1 ml-4">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("endDate")}
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
            >
              {isSubmitting ? <Loader /> : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
