

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import LogIn from './pages/auth/logIn'
import SignUp from './pages/auth/signUp'
import Landing from './pages/landing'
import Preview from './pages/preview'
import DashboardLayout from './pages/dashboard/layouts'

import Education from './pages/dashboard/pages/education'
import Projects from './pages/dashboard/pages/projects'
import Experience from './pages/dashboard/pages/experience'
import Achievements from './pages/dashboard/pages/achievements'
import Profile from "./pages/dashboard/pages/profile"
import Socials from './pages/dashboard/pages/socials'
import Skills from './pages/dashboard/pages/skills'
import AddEducation from './pages/dashboard/pages/addEducation'
import AddProject from './pages/dashboard/pages/addProject'
import AddExperience from './pages/dashboard/pages/addExperience'
import AddSkills from './pages/dashboard/pages/addSkills'
import AddAchievement from './pages/dashboard/pages/addAchievement'
import Overview from './pages/dashboard/pages/overview'
import AddProfile from './pages/dashboard/pages/addProfile'



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/dashboard", element: <DashboardLayout />,
    children: [
      {
        index: true ,
        element: <Overview/>
      },
      {
        path:"profile" ,
        element: <Profile />
      },
      {
        path: "profile/add" ,
        element: <AddProfile />
      },
      {
        path: "education",
        element: <Education />
      },
      {
        path: "education/add",
        element: <AddEducation />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "skills/add",
        element: <AddSkills />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "projects/add",
        element: <AddProject />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "experience/add",
        element: <AddExperience />
      },
      {
        path: "achievements",
        element: <Achievements />
      },
      {
        path: "achievements/add",
        element: <AddAchievement />
      },
      
    
      {
        path: "socials",
        element: <Socials />
      },
    ]
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LogIn /> },
  { path: "/preview", element: <Preview /> },


])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
