import React from 'react'
import { Navigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import About from './About'
import Landing from './Landing'
import Projects from './Projects'
import Skills from './Skills'

const UnauthenticatedHome = ({ user }) => {
  if (user) {
    return <Navigate to="home" />
  }

  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default UnauthenticatedHome
