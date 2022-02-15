import React from 'react'
import profilePic from './profile_pic.jpg'
import resume from './ben-jenkins-resume.pdf'
import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: 1.3em;
    margin-bottom: 1.3em;
    line-height: 1.8em;
`

const Button = styled.button`
    font-weight: 600;
`

const About = () => (
  <div className='container'>
    <div className='row my-4'>
      <div className='col-sm-8'>
        <h1>About Me</h1>
        <Paragraph>
            I{'\''}m a software engineering instructor at General Assembly. Each day I have the opportunity to teach new developers the skills they need to land jobs as full-stack developers.
        </Paragraph>

        <Paragraph>
            Prior to General Assembly I developed software for humanoid robots which delivered therapy lessons to children with Autism.
        </Paragraph>

        <Paragraph>
            Alongside work, I completed a Masters in Software Engineering from Harvard Extension School and a BA in Computer Science from TESU.
        </Paragraph>
        <div>
          <a href='mailto:benjenkinsv95@gmail.com' target='_blank' rel="noreferrer">
            <Button className='btn btn-secondary btn-lg me-4'>
              Get in Touch
            </Button>
          </a>
          <a href={resume} target='_blank' rel="noreferrer">
            <Button className='btn btn-outline-primary btn-lg'>
              Download Resume
            </Button>
          </a>
        </div>
      </div>
      <div className='col-sm-4'>
        <img className='img-fluid' src={profilePic} />
      </div>
    </div>
  </div>
)

export default About
