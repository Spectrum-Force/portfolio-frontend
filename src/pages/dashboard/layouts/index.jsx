import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { getDetails } from "../../../services/config"
import { useEffect, useState } from 'react'



const DashboardLayout = () => {
  const [user, setUser] = useState();


  const { token, firstName, lastName, userName } = getDetails();

  useEffect(() => {
    if (token) {
      setUser({
        firstName,
        lastName,
        userName,
      });
    }
  }, [])

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className='bg-secondary w-full '>
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  )
}

export default DashboardLayout