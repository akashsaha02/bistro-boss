import React from 'react'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'

const Profile = () => {

  const { logoutUser } = useAuth();

  const handleLogout = async () => {

    await logoutUser().then(() => {
      toast.success('Logged out successfully')
    }).catch((error) => {
      toast.error('Failed to logout')
    })

  }
  return (
    <div>Profile


      <button onClick={() => handleLogout()} className="btn btn-primary">Logout</button>
    </div>
  )
}

export default Profile