

import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import LogIn from './pages/auth/logIn'
import SignUp from './pages/auth/signUp'
import Landing from './pages/landing'
import Preview from './pages/preview'



const router = createBrowserRouter([
  {path:"/", element: <Landing/>},
  {path:"/dashboard", element: <Dashboard/>},
  {path:"/signup", element: <SignUp/>},
  {path:"/login", element: <LogIn/>},
  {path:"/preview", element: <Preview/>},
  

])

function App() {
 

  return (
    <>
      
    </>
  )
}

export default App
