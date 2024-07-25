import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiAddExperience } from '../../../services/experience';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddExperience = () => {

  const {
    register,
    handleSubmit,
     formState: { errors } } = useForm();
     const [isSubmitting, setIsSubmitting] = useState(false)
  
    const onSubmit = async (data) => {
     console.log(data);
     setIsSubmitting(true)
      try {
        const res = await apiAddExperience({
          companyName: data.name,
          role: data.role,
          responsibility: data.responsibility,
          location: data.location,
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
    <div>
     <h1 className="flex justify-center font-bold text-3xl mb-8">Add Experience</h1>
    <div  className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
       <form onSubmit = {handleSubmit(onSubmit)} className="place-content-center m-8" >
        <div className="">
          
          <label
            htmlFor="companyName"
            className="block  font-bold mb-1 ml-4 "
          >
            Name of Company
          </label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", {required: "name is required"})}
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="role"
            className="block  font-bold mb-1 ml-4 "
          >
           Role
          </label>
          <input
            type="text"
            id="role"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="responsibility"
            className="block  font-bold mb-1 ml-4 "
          >
           Responsibility
          </label>
          <input
            type="text"
            id="responsibility"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          <label
            htmlFor="location"
            className="block  font-bold mb-1 ml-4"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="startDate"
            className="block  font-bold mb-1 ml-4"
          >
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
          />
          <label
            htmlFor="endDate"
            className="block  font-bold mb-1 ml-4"
          >
           End Date
          </label>
          <input
            type="text"
            id="endDate"
            className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
          />
          
        </div>

        <div className="flex justify-center items-center mt-5">
        <button
        type="submit"
        className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
      >
      {isSubmitting? <Loader/> : "Add Experience" }
      </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AddExperience