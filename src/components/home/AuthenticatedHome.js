import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import heroStyles from '../../styles/heroStyles'

const AuthenticatedHome = ({ user }) => {
  if (!user) {
    return <Navigate to="/welcome" />
  }
  return (
    <div style={heroStyles}>
      <h1>Ben Jenkins</h1>
      <h2 className='mb-3'>Sign In to start using the app!</h2>
      <Link to='/sign-in'>
        <button className='btn btn-dark btn-lg'>
  Sign In
        </button>
      </Link>

    </div>
  )
}

export default AuthenticatedHome
