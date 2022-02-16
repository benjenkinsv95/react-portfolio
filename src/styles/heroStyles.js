const headerHeight = '56px'
export const centerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  margin: '0'
}

export const linearGradientStyles = {
  background: 'linear-gradient(60deg, #fdbb2d, #d6c534, #b0cb4a, #8ccd65, #68cd81, #44cb9b, #24c7b2, #22c1c3)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const radialGradientStyles = {
  background:
    'radial-gradient(circle at 50% 50%, #22c1c3, #24c7b2, #44cb9b, #68cd81, #8ccd65, #b0cb4a, #d6c534, #fdbb2d)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const footerGradientStyles = {
  background:
    'linear-gradient(240deg, #fdbb2d, #d6c534, #b0cb4a, #8ccd65, #68cd81, #44cb9b, #24c7b2, #22c1c3)',
  color: 'white'
}

export const heroStyles = {
  ...centerStyles,
  ...linearGradientStyles
}

export default heroStyles
