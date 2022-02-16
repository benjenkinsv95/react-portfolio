import React from 'react'
import { radialGradientStyles } from '../../styles/heroStyles'
import projects from '../../data/projects'
import Project from './Project'

const Projects = () => {
  const projectElements = projects.map((project, i) => (
    <Project
      {...project}
      key={i}
    />
  ))
  return (
    <div id="projects" style={radialGradientStyles}>
      <div className="container py-4">
        <h2 className='title-h2 text-center mb-3'>Projects</h2>
        <div className="row">
          {projectElements}
        </div>
      </div>
    </div>
  )
}

export default Projects
