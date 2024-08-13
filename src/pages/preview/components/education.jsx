import React from 'react';

const Education = ({ edu }) => {
  return (
    <section className='pt-10'>
      <div className='flex justify-center text-[50px] text-[#FFFFFF] mb-8'>
        <h1>Education</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {edu.map((education, index) => (
          <div
            key={index}
            className='p-6 bg-[#555555] border border-[#337eff] rounded-lg hover:bg-primary transition-colors duration-300'
          >
            <div className='flex justify-between items-center mb-4'>
              <h5 className='text-[#FFFFFF]'>{education.startDate} - {education.endDate}</h5>
            </div>
            <h4 className='text-[#FFFFFF] text-xl mb-2'>{education.institutionName}</h4>
            <p className='text-[#FFFFFF] mb-2'>{education.program}</p>
            <p className='text-[#FFFFFF] mb-2'>{education.qualification}</p>
            <p className='text-[#FFFFFF]'>{education.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
