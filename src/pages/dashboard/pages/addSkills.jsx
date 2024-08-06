import  { useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skills';
import { toast } from 'react-toastify';
import Loader from '../../../components/loader';

const AddSkills = () => {

const {
  register,
  handleSubmit,
   formState: { errors } } = useForm();
   const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
   console.log(data);
   setIsSubmitting(true)
    try {
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
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
    <h1  className="flex justify-center font-bold text-3xl mb-8 mt-10">Add Skill</h1>
    <div className="flex justify-center shadow-xl mt-5 w-[600px] m-64">
  <form onSubmit={handleSubmit(onSubmit)} className="place-content-center m-8">
    <div className="">
      <div>
  
        <label
          htmlFor="name"
          className="block   mb-1 ml-4"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {required: "name is required"})}
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        <label
          htmlFor="levelOfProficiency"
          className="block   mb-1 ml-4"
        >
         Level Of Proficiency
        </label>
        <select
        
          id="proficiency"
          name="levelOfProficiency"
          {...register("proficiency", {
          required: "proficiency is required",
        })}
          className="h-10 w-full px-2 py-1 border-black border-2 rounded-lg mb-4"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>
      
    </div>
    <div className="flex justify-center items-center mt-5">
      <button
        type="submit"
        className="h-10 w-40 px-3 py-2 bg-primary border-2 rounded-3xl hover:bg-[#e7d7e9] flex justify-center font-bold "
      >
         {isSubmitting? <Loader/> : "Add Skill" }
       
      </button>
    </div>
  </form>
</div>
  </div>
    
  )
}

export default AddSkills