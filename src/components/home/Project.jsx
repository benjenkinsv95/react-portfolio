import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../lib/use-window-size'
import styled from 'styled-components'

const Label = styled.span`
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    padding: 0.15rem 0.5rem;
    font-weight: 600;
    border-radius: 0.6rem;
    margin-right: 0.4rem;
    overflow-wrap: normal;
`

const Project = ({ title, video, labels, githubUrl, shortDescription, deployedUrl }) => {
  const videoElement = useRef(null)
  const { width } = useWindowSize()
  const onlyShowOneColumn = width < 768
  const handleMouseOver = event => {
    if (!onlyShowOneColumn) {
      videoElement.current.play()
    }
  }
  const handleMouseOut = event => {
    if (!onlyShowOneColumn) {
      videoElement.current.pause()
      videoElement.current.currentTime = 0
    }
  }

  return (
    <div
      className='col-md-6 col-xl-4 mb-4'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="card bg-dark text-white">
        {/* autoplay is also an option, instead of mouseOver/mouseOut */}
        <video ref={videoElement} className={width > 1400 ? 'small-video' : ''} loop muted playsInline autoPlay={onlyShowOneColumn}>
          <source src={video} type="video/mp4"/>
        </video>
        <div className="card-body">
          <h5 className="card-title text-secondary">{title}</h5>
          {labels.map((label, i) => (
            <Label key={i} background={label.background} color={label.color}>
              {label.name}
            </Label>
          ))}
          <p className="card-text mt-2" style={{ minHeight: '48px' }}>{shortDescription}</p>
          {githubUrl &&
            <a href={githubUrl} className="btn btn-primary me-3" target="_blank" rel="noreferrer">
                View GitHub <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          }
          {deployedUrl &&
            <a href={deployedUrl} className="btn btn-outline-secondary" target="_blank" rel="noreferrer">
                View Live <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default Project
