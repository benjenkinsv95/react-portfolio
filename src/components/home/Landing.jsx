import React from 'react'
import heroStyles from '../../styles/heroStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
  marginRight: '16px'
}
const Landing = () => (
  <div style={heroStyles}>
    <h1>Ben Jenkins</h1>
    <h2 className='mb-3 text-center'>Software&nbsp;Engineer, Educator, &&nbsp;Robot&nbsp;Enthusiast</h2>
    <div>
      <a href='https://www.linkedin.com/in/benjenkinsv95/' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size='3x' icon={['fab', 'linkedin']} />
      </a>
      <a href='https://github.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fab', 'github']} />
      </a>
      <a href='https://twitter.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fab', 'twitter']} />
      </a>
      <a href='benjenkinsv95@gmail.com' target='_blank' rel="noreferrer" className='icon-link'>
        <FontAwesomeIcon style={iconStyles} size="3x" icon={['fas', 'envelope']} />
      </a>
    </div>
  </div>
)

export default Landing
