import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getDetails } from '../../../services/config'

const AuthLayout = () => {

const {token} = getDetails();

if (token)
    return <Navigate to="/dashboard"/>;

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout