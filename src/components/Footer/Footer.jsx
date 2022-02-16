import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { footerGradientStyles } from '../../styles/heroStyles'
import styled from 'styled-components'
const Copyright = styled.div`
  font-weight: 700;
`

const iconStyles = {
  marginRight: '16px'
}
const Footer = () => {
  return (
    <div style={ footerGradientStyles }>
      <div id='about' className='container py-4 text-center'>
        <div className='mb-3'>
          <a href='https://www.linkedin.com/in/benjenkinsv95/' target='_blank' rel="noreferrer" className='icon-link'>
            <FontAwesomeIcon style={iconStyles} size='2x' icon={['fab', 'linkedin']} />
          </a>
          <a href='benjenkinsv95@gmail.com' target='_blank' rel="noreferrer" className='icon-link'>
            <FontAwesomeIcon style={iconStyles} size="2x" icon={['fas', 'envelope']} />
          </a>
          <a href='https://github.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
            <FontAwesomeIcon style={iconStyles} size="2x" icon={['fab', 'github']} />
          </a>
          <a href='https://twitter.com/benjenkinsv95' target='_blank' rel="noreferrer" className='icon-link'>
            <FontAwesomeIcon style={iconStyles} size="2x" icon={['fab', 'twitter']} />
          </a>
        </div>
        <Copyright>© {new Date().getFullYear()} BEN JENKINS - ALL RIGHTS RESERVED</Copyright>
      </div>
    </div>
  )
}

export default Footer
