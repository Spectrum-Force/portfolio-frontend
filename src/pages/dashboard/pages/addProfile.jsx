import { useForm } from "react-hook-form";
import { apiAddProfile } from "../../../services/profile";
import { useState } from "react";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";


const AddProfile = () => {

  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    try {

      const formData = new FormData();

      formData.append("profilePicture", data.profilePicture[0]);
      formData.append("location", data.location);
      formData.append("maritalStatus", data.maritalStatus);
      formData.append("sex", data.sex);
      formData.append("bio", data.bio);
      formData.append("about", data.about);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("contact", data.contact);
      formData.append("resume", data.resume[0]);
      
      const res = await apiAddProfile(formData);

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
      <h1  className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Profile</h1>
      <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
    <form onSubmit = {handleSubmit(onSubmit)} className="place-content-center m-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
    
          <label
            htmlFor="profilePicture"
            className="block   mb-1 ml-4"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("profilePicture")}
          />
          <label
            htmlFor="location"
            className="block   mb-1 ml-4"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("location")}
          />
          <label
            htmlFor="maritalStatus"
            className="block   mb-1 ml-4"
          >
            Marital Status
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("maritalStatus")}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="no">Prefer not to say</option>
          </select>
          <label
            htmlFor="sex"
            className="block   mb-1 ml-4"
          >
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("sex")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block   mb-1 ml-4"
          >
            Bio
          </label>
          <input
            type="text"
            id="bio"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("bio")}
          />
          <label
            htmlFor="about"
            className="block   mb-1 ml-4"
          >
            About
          </label>
          <input
            type="text"
            id="about"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("about")}
          />
          <label
            htmlFor="dateOfBirth"
            className="block   mb-1 ml-4"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("dateOfBirth")}
          />
          <label
            htmlFor="contact"
            className="block   mb-1 ml-4"
          >
            Contact
          </label>
          <input
            type="text"
            id="contact"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            {...register ("conact")}
          />
          <label
            htmlFor="resume"
            className="block   mb-1 ml-4"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
            accept=".pdf,.doc,.docx"
            {...register ("resume")}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
      <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] font-bold"
            >
              {isSubmitting ? <Loader/> : "Add Profile"}
            </button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default AddProfile