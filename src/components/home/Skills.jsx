import React from 'react'
import skills from '../../data/skills'
import { Line } from 'rc-progress'
import styled from 'styled-components'
const Label = styled.div`
  color: ${({ color }) => color};
  font-weight: 500;
`

const Skills = () => {
  const skillElements = skills.map((skill, i) => (
    <div key={i} className='col-sm-4 mt-3'>
      <h4 className='text-center'>{skill.name}</h4>
      <Line percent={`${skill.percentage}`} strokeWidth="8" strokeColor={skill.color} />
      <Label color={skill.color} className='text-center mt-2'>{skill.label}</Label>
    </div>
  ))
  return (
    <div id='skills' className='container'>
      <h2 className='title-h2 text-secondary text-center mt-3 mb-0'>Skills</h2>
      <div className='row mb-4'>
        {skillElements}
      </div>
    </div>
  )
}

export default Skills
