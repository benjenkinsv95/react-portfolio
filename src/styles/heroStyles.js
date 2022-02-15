const headerHeight = '56px'
export const centerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  margin: '0'
}

export const gradientStyles = {
  background: 'linear-gradient(60deg, #fdbb2d, #d6c534, #b0cb4a, #8ccd65, #68cd81, #44cb9b, #24c7b2, #22c1c3)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const heroStyles = {
  ...centerStyles,
  ...gradientStyles
}

export default heroStyles
