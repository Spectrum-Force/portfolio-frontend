import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiAddEducation } from '../../../services/education';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddEducation = () => {

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {
      const res = await apiAddEducation({

        institutionName: data.institutionName,
        location: data.location,
        qualification: data.qualification,
        program: data.program,
        grade: data.grade,
        startDate: data.startDate,
        endDate: data.endDate,
      });

      console.log(res.data);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="h-screen">
      <h1 className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Education</h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">

        <form onSubmit={handleSubmit(onSubmit)} className="place-content-center m-8" >
          <div className="">

            <label
              htmlFor=""
              className="block mb-1 ml-4 "
            >
              Name of Institution
            </label>
            <input
              type="text"
              id="institutionName"
              {...register("institutionName")}
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
            />
            <label
              htmlFor=""
              className="block   mb-1 ml-4"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
              {...register("location")}
            />
            <label
              htmlFor=""
              className="block   mb-1 ml-4"
            >
              Program
            </label>
            <input
              type="text"
              id="program"
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
              {...register("program")}
            />
            <label
              htmlFor=""
              className="block   mb-1 ml-4"
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
              {...register("qualification")}
            />

            <label
              htmlFor=""
              className="block   mb-1 ml-4"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg"
              {...register("startDate")}
            />

            <label
              htmlFor=""
              className="block   mb-1 ml-4"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg "
              {...register("endDate")}
            />

          </div>

          <div className="flex justify-center items-center mt-5">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
            >
              {isSubmitting ? <Loader /> : "Add Education"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEducation