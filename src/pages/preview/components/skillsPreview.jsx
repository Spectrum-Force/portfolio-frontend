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
      {ability.map((ability) => (
        <div>
          <div className="flex justify-between items-center space-x-6 ">
            <div className="w-[33%]">
              <h2 className="text-[18px] text-[#FFFFFF]">{ability.name}</h2>
              <div className="flex items-center mt-2 relative w-full">
                <div className="h-1 bg-[#0101011A] w-full rounded-md "></div>
                <div
                  className="h-1 bg-[#337eff] absolute"
                  style={{
                    width: `${getProficiencyPercentage(
                      ability.levelOfProficiency
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsPreview;
