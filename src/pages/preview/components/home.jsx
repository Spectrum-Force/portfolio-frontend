import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import PortfolioButton from './PortfolioButton';
import CvButton from './CvButton';

const Home = () => {
    return (
        <div className='pt-40 bg-[#555555] text-[#FFFFFF] md:px-16'>
            <div className='flex flex-col md:flex-row items-start'>
                {/* Text and buttons section */}
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-left text-3xl md:text-4xl'>Introduction</h1>

                    <div className='text-[#FFFFFF] text-[40px] pt-8 md:text-6xl text-left'>
                        <h4>
                            My Name is Felix Atoma, an <br />
                            Accra Based
                            <TypeAnimation
                                sequence={[
                                    'Photographer',
                                    1000,
                                    'Programmer',
                                    1000,
                                    'Tech Enthusiast',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h4>
                    </div>

                    <div className='flex flex-row gap-20 pt-6'>
                        <PortfolioButton />
                        <CvButton />
                    </div>
                </div>

                {/* Photo section */}
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <div className='w-full h-full md:w-[400px] md:h-[400px] bg-gray-300 rounded-full overflow-hidden'>
                        {/* Replace the src with the path to your photo */}
                        <img
                            src='src/assets/images/istockphoto-1950529308-1024x1024.jpg'
                            alt='Felix Atoma'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
