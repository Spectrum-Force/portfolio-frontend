import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiAddAchievement } from "../../../services/achievements";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";

const AddAchievement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      formData.append("award", data.award);
      formData.append("description", data.description);
      formData.append("date", data.date);
      formData.append("nameOfInstitution", data.nameOfInstitution);
      formData.append("image", data.image[0]);

      const res = await apiAddAchievement(formData);

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
      <h1 className="flex justify-center font-bold text-3xl mb-8">
        Add Achievement
      </h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="place-content-center m-8 text-black"
        >
          <div className="grid gap-8 ">
            <div>
              <label htmlFor="award" className="block   mb-1 ml-4">
                Award
              </label>
              <input
                type="text"
                id="award"
                name="award"
                {...register("award", { required: "award is required" })}
                placeholder="Enter the award name"
                className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
              />
              <label htmlFor="description" className="block   mb-1 ml-4">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("description")}
              />
              <label className="block  mb-1 ml-4">Institution</label>
              <input
                type="text"
                id="nameOfInstitution"
                placeholder="Name of Institution"
                className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("nameOfInstitution")}
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
              <label htmlFor="date" className="block   mb-1 ml-4">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="h-10 w-64 px-2 py-1 border-black border-2 rounded-lg mb-4"
                {...register("date")}
              />
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
            >
              {isSubmitting ? <Loader /> : "Add Achievement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAchievement;
