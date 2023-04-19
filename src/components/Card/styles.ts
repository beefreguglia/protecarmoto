import { styled } from '@stitches/react'

export const CardContainer = styled('div', {
  backgroundColor: '$gray950',
  width: '100%',
  padding: '2.5rem',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '400px',

  h2: {
    marginTop: '2rem',
    fontSize: '1.5rem',
  },

  p: {
    marginTop: '0.5rem',
  },
})
