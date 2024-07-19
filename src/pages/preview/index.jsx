import React from 'react'
import Navbar from "../../components/Navbar"

import Portfolio from './components/portfolio'
import About from './components/about'
import Experiences from './components/experiences'
import Contact from './components/contact'
import Home from './components/home'
import Testimonials from './components/testimonials'
import Education from './components/education'
import Footer from './components/footer'
import Reference from './components/reference'
import PaginationComponent from './components/PaginationComponent'

const Preview = () => {
  return (
    <div className='bg-[#555555]'>
      <Navbar />
      <Home/>
       <About/>
      <PaginationComponent/>
      <Portfolio/>
      <Experiences/>
      <Education/>
      <Testimonials/>
      
      <Contact/>
      <Reference/>
      <Footer/>
    
      </div>
  )
}

export default Preview