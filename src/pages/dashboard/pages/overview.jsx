
import { useEffect, useState } from "react"
import K from "../../../constants"
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetExperience } from "../../../services/experience";
import { apiGetEducation } from "../../../services/education";
import PageLoader from "../../../components/PageLoader";

import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";





const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [user] = useOutletContext();
  console.log(user)



  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalExperience, totalEducation] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetExperience(),
        apiGetEducation(),
      ]);

      console.log("Total skills:", totalSkills);

      const newData = {
        skills: totalSkills.data.Skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        achievements: totalAchievements.data.Achievements.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experience: totalExperience.data.experience.length ?? 0,
      };
      setData(newData);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };


  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      {
        isLoading ? (
          <PageLoader />
        ) : (
          <div className="p-10 mt-10 flex flex-col gap-y-10">
            <div className="bg-blue-500 ml-auto text-white px-3 py-2 rounded">
              <Link to={`/preview/${user?.userName}`}>Preview</Link>

            </div>

            <div className="grid grid-cols-3 gap-10">
              {K.OVERVIEW.map(({ icon, text, id }, index) => (
                <div
                  key={index}
                  className=" h-40 shadow-md rounded-xl p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white flex flex-col justify-between"
                >
                  <div className="flex justify-between">
                    <span className="text-secondary">{icon}</span>
                    <span className="text-lg font-semibold">{text}</span>
                  </div>
                  <CountUp
                    className="text-2xl font-semibold"
                    start={0}
                    end={data[id]}
                  />
                </div>
              )

              )}
            </div>

          </div>
        )
      }
    </>
  )
}

export default Overview