import React from 'react'
import heroStyles from '../../styles/heroStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
  marginRight: '16px'
}
const Landing = () => (
  <div id='landing' style={heroStyles}>
    <h2 className='title-h2'>Ben Jenkins</h2>
    <h3 className='mb-3 text-center'>Sr.&nbsp;Software&nbsp;Engineer | Educator | Former&nbsp;Humanoid&nbsp;Robot&nbsp;Developer</h3>
    <div>
      <a href='https://www.linkedin.com/in/benjenkinsv95/' target='_blank' rel="noreferrer" className='icon-link' aria-label="Ben Jenkins' LinkedIn">
        <FontAwesomeIcon style={iconStyles} size='3x' icon={['fab', 'linkedin']} />
      </a>
      <a href='mailto:benjenkinsv95@gmail.com' target='_blank' rel="noreferrer" className='icon-link' aria-label="Ben Jenkins' Email">
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fas', 'envelope']} />
      </a>
      <a href='https://github.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link' aria-label="Ben Jenkins' GitHub">
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fab', 'github']} />
      </a>
    </div>
  </div>
)

export default Landing
