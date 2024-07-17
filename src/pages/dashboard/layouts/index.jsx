

import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex overflow-hidden">
        <Sidebar/>
       <div className='bg-secondary w-full '>
       <Outlet/> 
       </div>
    </div>
  )
}

export default DashboardLayout