import React from "react";

const Achievements = ({ achieve }) => {
  return (
    <section className="pt-10">
      <div className="flex justify-center text-[50px] text-[#FFFFFF] mb-8">
        <h1>Achievements</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {achieve.map((achievement, index) => (
          <div
            key={index}
            className="p-6  bg-[#555555] border border-[#337eff] rounded-lg transition-colors duration-300"
          >
            <div className="flex flex-row  justify-between items-center ">
              <h4 className="text-[#FFFFFF] text-xl font-bold">
                {achievement.award}
              </h4>
              <div>
                <img
                  src={`https://savefiles.org/secure/uploads/15951?shareable_link=328`}
                  alt={achievement.award}
                  className="w-full h-32 object-contain  rounded-lg"
                />
              </div>
            </div>
            <div className="">
            <h5 className="text-[#FFFFFF]">{achievement.date}</h5>
            <p className="text-[#FFFFFF] ">{achievement.description}</p>
            <p className="text-[#FFFFFF]">{achievement.nameOfInstitution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
