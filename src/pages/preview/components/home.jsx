import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import PortfolioButton from './PortfolioButton';
const Home = () => {
    return ( 
        <div className='pt-40 bg-[#555555] text-[#FFFFFF] ml-10' id='home  md:px-16'>
            <div>
                <h1>Introduction</h1>
            </div>

            <div className='text-[#FFFFFF] text-[40px] pt-8 md:text-6xl ' >
                <h4>My Name is Felix Atoma, an <br />
                    Accra Based <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Photographer',
                            1000, // wait 1s before replacing "Photograper" with "Programmer"
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


            <div className='pt-6'>
                
                <PortfolioButton />
            </div>



        </div>
    )
}

export default Home