
import { useEffect, useState } from "react"
import K from "../../../constants"
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetExperience } from "../../../services/experience";
import { apiGetEducation } from "../../../services/education";


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalExperience, totalEducation] = await Promise.all ([
        apiGetSkills,
        apiGetAchievements,
        apiGetProjects,
        apiGetExperience,
        apiGetEducation,
      ]);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        education: totalEducation.length,
        experiences: totalExperience.length,
      };

      setData(newData);
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  };


  useEffect(() =>{
    getData()
  }, []);

  return (
  <div className="p-10 mt-10">
    <div className="grid grid-cols-3 gap-10">
      {K.OVERVIEW.map(({icon , text, total}, index) => (
        <div
        key={index}
        className="h-40 shadow-md bg-white p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between">
            <span className="text-primary">{icon}</span>
            <span className="text-lg font-semibold">{text}</span>
          </div>
          <span className="text-2xl font-semibold">{total}</span>
        </div>
      )

      )}
    </div>
  </div>
  )
}

export default Overview