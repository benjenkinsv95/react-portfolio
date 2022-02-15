import React from 'react'
import { Navigate } from 'react-router-dom'
import About from './About'
import Landing from './Landing'

const UnauthenticatedHome = ({ user }) => {
  if (user) {
    return <Navigate to="home" />
  }

  return (
    <>
      <Landing />
      <About />
    </>
  )
}

export default UnauthenticatedHome
