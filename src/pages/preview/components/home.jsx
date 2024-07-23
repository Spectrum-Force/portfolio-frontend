import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import PortfolioButton from './PortfolioButton';
import CvButton from './CvButton';
const Home = () => {
    return ( 
        <div className='pt-40 bg-[#555555] text-[#FFFFFF] ml-10' id='home  md:px-16'>
            <div>
                <h1>Introduction</h1>
            </div>

            <div className='text-[#FFFFFF] text-[40px] pt-8 md:text-6xl ' >
                <h4> I am Eunice Afrifa, an <br />
                    Accra Based <TypeAnimation
                        sequence={[
                            
                            'Frontend Developer',
                            1000, 
                            'Programmer',
                            1000,
                            'Tech Enthusiast',
                            1000,

                        ]}
                        wrapper="span"







                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity} />







                </h4>



            </div>


           <div className='flex flex-row gap-20'>

           <div className='pt-6'>
                
                <PortfolioButton />
            </div>
            <div className='ml-8 pt-4'>
            <CvButton />
            </div>


           </div>



        </div>
    )
}

export default Home