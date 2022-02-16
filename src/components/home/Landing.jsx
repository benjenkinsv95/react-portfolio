import React from 'react'
import heroStyles from '../../styles/heroStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
  marginRight: '16px'
}
const Landing = () => (
  <div id='landing' style={heroStyles}>
    <h2 className='title-h2'>Ben Jenkins</h2>
    <h3 className='mb-3 text-center'>Software&nbsp;Engineer, Educator, &&nbsp;Robot&nbsp;Enthusiast</h3>
    <div>
      <a href='https://www.linkedin.com/in/benjenkinsv95/' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size='3x' icon={['fab', 'linkedin']} />
      </a>
      <a href='benjenkinsv95@gmail.com' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fas', 'envelope']} />
      </a>
      <a href='https://github.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fab', 'github']} />
      </a>
      <a href='https://twitter.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fab', 'twitter']} />
      </a>
    </div>
  </div>
)

export default Landing
