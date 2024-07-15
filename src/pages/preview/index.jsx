import React from 'react'
import Navbar from "../../components/Navbar"
import Services from './components/services'
import Portfolio from './components/portfolio'
import About from './components/about'
import Experiences from './components/experiences'
import Contact from './components/contact'
import Home from './components/home'
import Testimonials from './components/testimonials'
import Projects from './components/projects'
import Footer from './components/footer'
import Reference from './components/reference'
const Preview = () => {
  return (
    <div className='bg-[#555555]'>
      <Navbar />
      <Home/>
       <About/>
      <Services/>
      <Portfolio/>
      <Experiences/>
      <Testimonials/>
      <Projects/>
      <Contact/>
      <Reference/>
      <Footer/>
    
      </div>
  )
}

export default Preview