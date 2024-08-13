import React from "react";

const Experiences = ({ insight }) => {
  return (
    <section className="pt-10">
      <div className="flex justify-center text-[50px] text-[#FFFFFF] mb-8">
        <h1>Experiences</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {insight.map((experience, index) => (
          <div
            key={index}
            className="p-6 bg-[#555555] border border-[#337eff] rounded-lg hover:bg-primary transition-colors duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-[#FFFFFF]">
                {new Date(experience.startDate).toLocaleDateString("en-US")} -{" "}
                {new Date(experience.endDate).toLocaleDateString("en-US")}
              </h5>
            </div>
            <h4 className="text-[#FFFFFF] text-xl mb-2">{experience.companyName}</h4>
            <p className="text-[#FFFFFF] mb-2">{experience.location}</p>
            <p className="text-[#FFFFFF] mb-2">{experience.role}</p>
            <p className="text-[#FFFFFF]">{experience.responsibility}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
