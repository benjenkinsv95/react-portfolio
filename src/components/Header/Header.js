import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <a href='#landing' className='nav-link'>Home</a>
    <a href='#about' className='nav-link'>About</a>
    <a href='#projects' className='nav-link'>Projects</a>
  </>
)

const alwaysOptions = (
  <>
    {/* Uncomment to add home nav link */}
    {/* <NavLink to='/' className='nav-link'>Home</NavLink> */}
  </>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand='md' sticky="top">
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Ben Jenkins</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
