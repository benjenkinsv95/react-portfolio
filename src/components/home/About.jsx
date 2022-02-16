import React from 'react'
import profilePic from './profile_pic.jpg'
import resume from './ben-jenkins-resume.pdf'
import styled from 'styled-components'
import useWindowSize from '../../lib/use-window-size'

const Paragraph = styled.p`
    font-size: 1.3em;
    margin-bottom: 1.3em;
    line-height: 1.8em;
`

const Button = styled.button`
    font-weight: 600;
`

const About = () => {
  const { width } = useWindowSize()
  return (
    <div id='about' className='container'>
      <div className='row mb-4'>
        <div className='col-sm-8 mt-4'>
          <h2 className='title-h2 text-secondary'>About Me</h2>
          <Paragraph>
            I{'\''}m a software engineering instructor at General Assembly. I have had the opportunity to <span className='text-secondary'>teach over 500 new developers</span> in demand skills, such as <span className='text-primary'>React, Express, & Django</span> that they used to land jobs as full-stack developers.
          </Paragraph>

          <Paragraph>
            Prior to General Assembly I developed software for <span className='text-primary'>humanoid robots</span> which delivered therapy lessons to children with Autism.
          </Paragraph>

          <Paragraph>
            Alongside work, I completed a <span className='text-secondary'>Masters in Software Engineering</span> from <span className='text-primary'>Harvard Extension School</span> and a BA in Computer Science from TESU.
          </Paragraph>
          <div>
            <a href='mailto:benjenkinsv95@gmail.com' target='_blank' rel="noreferrer">
              <Button className={`btn btn-secondary ${width > 400 ? 'btn-lg' : ''} me-3`}>
              Get in Touch
              </Button>
            </a>
            <a href={resume} target='_blank' rel="noreferrer">
              <Button className={`btn btn-outline-primary ${width > 400 ? 'btn-lg' : ''}`}>
              Download Resume
              </Button>
            </a>
          </div>
        </div>
        <div className='col-sm-4 mt-4'>
          <img className='img-fluid' src={profilePic} />
        </div>
      </div>
    </div>
  )
}

export default About
