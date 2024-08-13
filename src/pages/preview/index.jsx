import React from 'react'
import Navbar from "../../components/Navbar"

import Portfolio from './components/portfolio'
import About from './components/about'
import Experiences from './components/experiences'
import Contact from './components/contact'
import Home from './components/home'
// import Testimonials from './components/testimonials'
import Education from './components/education'
import Footer from './components/footer'
import Reference from './components/reference'
import PaginationComponent from './components/PaginationComponent'
import { useLoaderData } from 'react-router-dom'
import SkillsPreview from './components/skillsPreview'
import Projects from './components/projects'
import Achievements from './components/achievements'

const Preview = () => {

const data = useLoaderData();
console.log(data)

  return (
    <div className='bg-[#555555]'>
      <Navbar />
      <Home name={`${data.firstName} ${data.otherNames} ${data.lastName}`}/>
       <About content={data.userProfile[0].about}/>
       <SkillsPreview ability={data.skills}/>
       <Projects task={data.projects}/>
       <Achievements achieve={data.achievements}/>
     
      
      <Experiences insight={data.experiences}/>
      <Education edu={data.education}/>
      {/* <Testimonials/>  */}
      <Contact/>
      <Reference/>
      <Footer/>
      </div>
  )
}

export default Preview