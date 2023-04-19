import { keyframes, styled } from '@/styles'

const Up = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-1rem)' },
})

export const CardContainer = styled('div', {
  backgroundColor: '$gray950',
  width: '100%',
  padding: '2.5rem',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  cursor: 'pointer',

  '.image': {
    marginTop: '-120px',
  },

  h2: {
    marginTop: '2rem',
    fontSize: '1.5rem',
  },

  p: {
    marginTop: '0.5rem',
  },

  '&:hover': {
    animation: `${Up} 300ms ease-in-out forwards`,
  },
})
