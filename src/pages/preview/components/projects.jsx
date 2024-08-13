import React from 'react';

const Projects = ({ task }) => {
  return (
    <section className='pt-10'>
      <div className='flex justify-center text-[50px] text-[#FFFFFF] mb-8'>
        <h1>Projects</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {task.map((projects, index) => (
          <div
            key={index}
            className='p-6 bg-[#555555] border border-[#337eff] rounded-lg  transition-colors duration-300'
          >
            <div className='flex justify-between items-center mb-4'>
            <h4 className='text-[#FFFFFF] text-xl mb-2'>{projects.projectName}</h4>
             
            </div>
            <h5 className='text-[#FFFFFF]'>{projects.startDate} - {projects.endDate}</h5>
            <img src={`https://savefiles.org/secure/uploads/15951?shareable_link=328`} alt="" className='w-full h-32 object-contain mb-4 rounded-lg' />
            
            <p className='text-[#FFFFFF] mb-2'>{projects.link}</p>
            <p className='text-[#FFFFFF] mb-2'>{projects.description}</p>
            <p className='text-[#FFFFFF]'>{projects.contributors}</p>
            <p className='text-[#FFFFFF]'>{projects.skills}</p>
            <p className='text-[#FFFFFF]'>{projects.nameOfInstitution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
