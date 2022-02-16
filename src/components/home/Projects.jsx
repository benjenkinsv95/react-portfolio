import React from 'react'
import { radialGradientStyles } from '../../styles/heroStyles'
import projects from '../../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../lib/use-window-size'

const Projects = () => {
  const { width } = useWindowSize()
  const projectElements = projects.map((project, i) => (
    <div key={i} className='col-md-6 col-xl-4 mb-4'>
      <div className="card bg-dark text-white">
        {/* autoplay is also an option, instead of mouseOver/mouseOut */}
        <video className={width > 450 ? 'small-video' : ''} loop muted playsInline autoPlay>
          <source src={project.videoUrl} type="video/mp4"/>
        </video>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text" style={{ minHeight: '48px' }}>{project.shortDescription}</p>
          {project.githubUrl &&
            <a href={project.githubUrl} className="btn btn-primary me-3" target="_blank" rel="noreferrer">
                View GitHub <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          }
          {project.deployedUrl &&
            <a href={project.deployedUrl} className="btn btn-outline-secondary" target="_blank" rel="noreferrer">
                View Live <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          }
        </div>
      </div>
    </div>
  ))
  return (
    <div style={radialGradientStyles}>
      <div className="container py-4">
        <h2 id="projects" className='title-h2 text-center mb-3'>Projects</h2>
        <div className="row">
          {projectElements}
        </div>
      </div>
    </div>
  )
}

export default Projects
