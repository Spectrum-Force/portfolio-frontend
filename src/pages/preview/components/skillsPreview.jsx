import React from "react";

const SkillsPreview = ({ ability }) => {
  const levelOfProficiency = {
    beginner: 20,
    intermediate: 50,
    advanced: 80,
    expert: 100,
  };

  const getProficiencyPercentage = (level) => {
    return levelOfProficiency[level] || 0;
  };

  return (
    <section className="pt-20">
      <div className="text-[40px] text-[#FFFFFF] flex justify-center items-center">
        <h1>Skills</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {ability.map((skill) => (
          <div key={skill.name} className="p-4 ">
            <h2 className="text-[18px] text-[#FFFFFF] mb-2">{skill.name}</h2>
            <div className="flex items-center w-full">
              <div className="w-full h-2 bg-[#0101011A] rounded-md">
                <div
                  className="h-2 bg-[#337eff] rounded-md"
                  style={{
                    width: `${getProficiencyPercentage(skill.levelOfProficiency)}%`,
                  }}
                ></div>
              </div>
            </div>
            <p className="text-[#FFFFFF] mt-2">
              {getProficiencyPercentage(skill.levelOfProficiency)}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPreview;
