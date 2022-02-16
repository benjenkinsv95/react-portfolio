import React from 'react'
import { radialGradientStyles } from '../../styles/heroStyles'
import projects from '../../data/projects'
import Project from './Project'
import useWindowSize from '../../lib/use-window-size'

const Projects = () => {
  const { width } = useWindowSize()
  const onlyShowOneColumn = width < 768
  const projectElements = projects.map((project, i) => (
    <Project
      {...project}
      key={i}
    />
  ))
  return (
    <div id="projects" style={radialGradientStyles}>
      <div className="container py-4">
        <h2 className='title-h2 text-center'>Projects</h2>
        {onlyShowOneColumn || <h4 className='text-center mb-3'>You can preview a project by hovering over it</h4> }
        <div className="row">
          {projectElements}
        </div>
      </div>
    </div>
  )
}

export default Projects
