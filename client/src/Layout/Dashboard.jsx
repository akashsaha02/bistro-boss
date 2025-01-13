import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
        <div className="">
            <Sidebar/>
        </div>
        <div className="w-full">
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Dashboard
